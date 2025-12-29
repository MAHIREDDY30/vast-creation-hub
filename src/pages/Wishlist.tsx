import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Wishlist = () => {
  const { items, removeFromWishlist, loading } = useWishlist();
  const { addToCart } = useCart();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.product_id,
      name: item.product_name,
      category: item.product_category,
      price: Number(item.product_price),
      image: item.product_image,
    });
    toast({
      title: "Added to Cart",
      description: `${item.product_name} has been added to your cart.`,
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Store
        </Button>

        <h1 className="text-3xl font-display font-bold text-foreground mb-8">
          My Wishlist
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Save your favorite items to view them later
            </p>
            <Button onClick={() => navigate("/")}>Start Shopping</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden group"
              >
                <div
                  className="aspect-[3/4] relative cursor-pointer"
                  onClick={() => navigate(`/product/${item.product_id}`)}
                >
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(item.product_id);
                    }}
                    className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                    {item.product_category}
                  </p>
                  <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-1">
                    {item.product_name}
                  </h3>
                  <p className="text-primary font-bold mb-4">
                    ₹{Number(item.product_price).toLocaleString()}
                  </p>
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
