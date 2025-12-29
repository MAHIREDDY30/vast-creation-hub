import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useToast } from "./use-toast";
import { Product } from "@/data/products";

interface WishlistItem {
  id: string;
  product_id: number;
  product_name: string;
  product_category: string;
  product_price: number;
  product_image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  isInWishlist: (productId: number) => boolean;
  addToWishlist: (product: Product) => Promise<void>;
  removeFromWishlist: (productId: number) => Promise<void>;
  toggleWishlist: (product: Product) => Promise<void>;
  loading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      setItems([]);
    }
  }, [user]);

  const fetchWishlist = async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("wishlist")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setItems(data);
    }
    setLoading(false);
  };

  const isInWishlist = (productId: number): boolean => {
    return items.some((item) => item.product_id === productId);
  };

  const addToWishlist = async (product: Product) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your wishlist.",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("wishlist").insert({
      user_id: user.id,
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      product_price: product.price,
      product_image: product.image,
    });

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Already in Wishlist",
          description: `${product.name} is already in your wishlist.`,
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to add to wishlist.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
      fetchWishlist();
    }
  };

  const removeFromWishlist = async (productId: number) => {
    if (!user) return;

    const { error } = await supabase
      .from("wishlist")
      .delete()
      .eq("user_id", user.id)
      .eq("product_id", productId);

    if (!error) {
      setItems((prev) => prev.filter((item) => item.product_id !== productId));
      toast({
        title: "Removed from Wishlist",
        description: "Item has been removed from your wishlist.",
      });
    }
  };

  const toggleWishlist = async (product: Product) => {
    if (isInWishlist(product.id)) {
      await removeFromWishlist(product.id);
    } else {
      await addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
