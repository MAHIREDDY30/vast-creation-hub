import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, Product as ProductType } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/hooks/useWishlist";
import { useToast } from "@/hooks/use-toast";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      const found = getProductById(parseInt(id));
      if (found) {
        setProduct(found);
        if (found.sizes && found.sizes.length > 0) {
          setSelectedSize(found.sizes[0]);
        }
        if (found.colors && found.colors.length > 0) {
          setSelectedColor(found.colors[0]);
        }
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Product not found
          </h2>
          <Button onClick={() => navigate("/")}>Back to Store</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Store
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`absolute top-4 left-4 ${product.badgeColor} text-foreground text-xs font-heading uppercase tracking-wider px-3 py-1 rounded-full`}
            >
              {product.badge}
            </span>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary text-sm font-heading uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="text-3xl font-heading font-bold text-primary">
              ₹{product.price.toLocaleString()}
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Color: <span className="text-muted-foreground">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                variant="hero"
                size="xl"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => toggleWishlist(product)}
                className={inWishlist ? "text-primary border-primary" : ""}
              >
                <Heart
                  className={`w-5 h-5 ${inWishlist ? "fill-primary" : ""}`}
                />
              </Button>
            </div>

            {/* Material */}
            {product.material && (
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Material:</span>{" "}
                {product.material}
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
                <p className="text-xs text-foreground">Orders over ₹2000</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Secure Payment</p>
                <p className="text-xs text-foreground">100% Protected</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Easy Returns</p>
                <p className="text-xs text-foreground">15 Day Policy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;
