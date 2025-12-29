import { useState } from "react";
import { Tag, X, Check, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PromoCode {
  id: string;
  code: string;
  discount_type: string;
  discount_value: number;
  min_order_amount: number;
}

interface PromoCodeInputProps {
  subtotal: number;
  appliedPromo: PromoCode | null;
  setAppliedPromo: (promo: PromoCode | null) => void;
  discount: number;
  setDiscount: (discount: number) => void;
}

const PromoCodeInput = ({
  subtotal,
  appliedPromo,
  setAppliedPromo,
  discount,
  setDiscount,
}: PromoCodeInputProps) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const applyPromoCode = async () => {
    if (!code.trim()) return;

    setLoading(true);
    const { data, error } = await supabase
      .from("promo_codes")
      .select("*")
      .eq("code", code.toUpperCase())
      .eq("is_active", true)
      .maybeSingle();

    if (error || !data) {
      toast({
        title: "Invalid Code",
        description: "This promo code is not valid or has expired.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (subtotal < Number(data.min_order_amount)) {
      toast({
        title: "Minimum Order Not Met",
        description: `This code requires a minimum order of ₹${Number(
          data.min_order_amount
        ).toLocaleString()}.`,
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Calculate discount
    let discountAmount = 0;
    if (data.discount_type === "percentage") {
      discountAmount = (subtotal * Number(data.discount_value)) / 100;
    } else {
      discountAmount = Number(data.discount_value);
    }

    setAppliedPromo(data);
    setDiscount(discountAmount);
    setCode("");
    toast({
      title: "Promo Code Applied!",
      description: `You saved ₹${discountAmount.toLocaleString()}`,
    });
    setLoading(false);
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setDiscount(0);
  };

  if (appliedPromo) {
    return (
      <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {appliedPromo.code}
          </span>
          <span className="text-sm text-primary">
            -₹{discount.toLocaleString()}
          </span>
        </div>
        <button
          onClick={removePromoCode}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter promo code"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          className="pl-10"
        />
      </div>
      <Button onClick={applyPromoCode} disabled={loading || !code.trim()}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Apply"}
      </Button>
    </div>
  );
};

export default PromoCodeInput;
