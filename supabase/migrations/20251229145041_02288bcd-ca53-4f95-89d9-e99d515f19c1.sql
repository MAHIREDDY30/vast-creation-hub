-- Create wishlist table
CREATE TABLE public.wishlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL,
  product_name TEXT NOT NULL,
  product_category TEXT NOT NULL,
  product_price DECIMAL(10,2) NOT NULL,
  product_image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS on wishlist
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;

-- Wishlist policies
CREATE POLICY "Users can view their own wishlist" ON public.wishlist FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can add to their own wishlist" ON public.wishlist FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove from their own wishlist" ON public.wishlist FOR DELETE USING (auth.uid() = user_id);

-- Create promo codes table
CREATE TABLE public.promo_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  discount_type TEXT NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10,2) NOT NULL,
  min_order_amount DECIMAL(10,2) DEFAULT 0,
  max_uses INTEGER,
  used_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on promo codes (public read for validation)
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;

-- Anyone can read active promo codes for validation
CREATE POLICY "Anyone can read active promo codes" ON public.promo_codes FOR SELECT USING (is_active = true);

-- Insert some default promo codes
INSERT INTO public.promo_codes (code, discount_type, discount_value, min_order_amount) VALUES
  ('WELCOME10', 'percentage', 10, 1000),
  ('FLAT500', 'fixed', 500, 3000),
  ('FESTIVE20', 'percentage', 20, 5000);