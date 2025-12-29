-- Add UPDATE policy for orders so users can cancel their orders
CREATE POLICY "Users can update their own orders" 
ON public.orders 
FOR UPDATE 
USING (auth.uid() = user_id);