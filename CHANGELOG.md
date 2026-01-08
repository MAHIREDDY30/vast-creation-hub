# VASTRA - Project Documentation
## Converting an E-commerce Template into a Full-Stack Clothing Store

---

## WEEK 1: Setting Up Base Template & Adding Core Features

### 1. Overall Purpose Change

**Original Template:**
- Basic e-commerce landing page template
- Static product display with no functionality
- No user interaction or data persistence

**My Website:**
- Converted into a full-stack e-commerce clothing store
- Focus on user authentication, cart, wishlist, and order management
- Complete shopping flow from browse to checkout

**Explanation:**
The template was transformed from a static showcase into a functional online store with real user accounts and order processing.

---

### 2. Branding & Identity Changes

**Original:**
- Generic e-commerce branding
- Standard headings and descriptions

**My Site:**
- Branded as "VASTRA" (meaning clothing in Sanskrit)
- Dark theme with amber/gold accent colors
- Indian Rupee (₹) currency throughout

**Impact:**
Website now has a distinct identity focused on Indian fashion retail.

---

### 3. Navigation & Section Structure Changes

**Original Sections:**
- Home
- Products
- About
- Contact

**My Modified Sections:**
- Home (Hero, Collections, Featured Products)
- Product Detail Pages (individual product pages)
- Authentication (Login/Signup)
- Cart (slide-out drawer)
- Wishlist (saved items)
- Checkout (address & payment)
- Orders (order history)

**Explanation:**
Removed unnecessary sections and added e-commerce specific pages for complete shopping experience.

---

### 4. Landing Page (Hero Section)

**Original:**
- Generic hero section with stock images
- Abstract promotional text

**My Version:**
- Hero showcasing fashion collections
- Featured products section
- Collections grid
- Testimonials section

**→ This provides immediate product visibility and encourages browsing**

---

### 5. Product Display Changes

**Original:**
- Static product cards
- No product details page
- No size/color options

**My Changes:**
- Added individual product pages with:
  - Size selection (XS, S, M, L, XL, XXL)
  - Color selection with visual swatches
  - Quantity selector
  - Add to Cart / Add to Wishlist buttons
  - Size Guide modal
  - Material information
  - Rating display

**Explanation:**
Added complete product interaction allowing customers to customize their purchase.

---

### 6. Authentication System

**Original:**
- No user authentication
- No user accounts

**My Changes:**
- Added Login page with email/password
- Added Signup page with name, email, password
- Session persistence across browser refreshes
- User profile creation on signup
- Protected routes for orders/wishlist

**Explanation:**
Users can now create accounts, login, and have personalized experiences.

---

### 7. Shopping Cart System

**Original:**
- No cart functionality

**My Changes:**
- Cart Context for state management
- Cart Drawer (slide-out panel from right)
- Add/Remove items
- Quantity adjustment (+/-)
- Cart badge showing item count
- Promo code application
- localStorage persistence

**Explanation:**
Complete cart system allowing users to collect items before checkout.

---

### 8. Wishlist System

**Original:**
- No wishlist functionality

**My Changes:**
- Heart icon on products to save
- Wishlist page showing all saved items
- Move to cart from wishlist
- Database sync for logged-in users
- Wishlist badge on navbar

**Explanation:**
Users can save products for later and easily move them to cart when ready.

---

### 9. Checkout System

**Original:**
- No checkout process

**My Changes:**
- Address Management:
  - Add new addresses
  - Select delivery address
  - Set default address
- Payment Options:
  - Cash on Delivery (COD)
  - PhonePe
  - Paytm
  - Other UPI Apps
- Order Summary with pricing breakdown
- Promo code discount display

**Explanation:**
Complete checkout flow with Indian payment methods and address management.

---

### 10. Orders System

**Original:**
- No order tracking

**My Changes:**
- Orders page with all past orders
- Expandable order cards showing:
  - Order ID & date
  - Status badge (Pending/Processing/Shipped/Delivered)
  - Payment method
  - Delivery address
  - Individual items with images
  - Price breakdown
- Cancel order functionality
- Cancelled orders filtered from view

**Explanation:**
Users can track their orders and see complete order history.

---

### 11. Size Guide Feature

**Original:**
- No size guidance

**My Changes:**
- Size Guide modal on product page
- Clothing sizes: Chest, Waist, Hip measurements
- Footwear sizes: UK, US, EU conversions
- "How to Measure" instructions
- Auto-detection based on product category

**Explanation:**
Helps customers choose correct size reducing returns.

---

### 12. CSS and Styling

**Original:**
- Default template styling

**Modified:**
- Dark theme (#0A0A0B background)
- Amber/Gold accent colors
- Glass morphism on navbar scroll
- Framer Motion animations throughout
- Responsive design for all screens
- Custom card styling
- Toast notifications

---

## Database Schema Created

### Tables Added:

| Table | Purpose | RLS |
|-------|---------|-----|
| profiles | User profile info (name, phone) | User-specific |
| addresses | Delivery addresses | User-specific |
| orders | Order information | User-specific |
| order_items | Items in each order | Via order |
| wishlist | Saved products | User-specific |
| promo_codes | Discount codes | Public read |

---

## Working Flowchart

```
                    ┌─────────┐
                    │  Start  │
                    └────┬────┘
                         │
                         ▼
              ┌──────────────────┐
              │   Landing Page   │
              │  (Hero Section)  │
              └────────┬─────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
   ┌─────────┐   ┌──────────┐   ┌──────────┐
   │ Browse  │   │  Search  │   │   Auth   │
   │Products │   │ Products │   │Login/Sign│
   └────┬────┘   └────┬─────┘   └────┬─────┘
        │             │              │
        └──────┬──────┘              │
               │                     │
               ▼                     │
        ┌─────────────┐              │
        │Product Page │◄─────────────┘
        │Size/Color   │
        └──────┬──────┘
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
   ┌─────────┐   ┌─────────┐
   │Add Cart │   │Wishlist │
   └────┬────┘   └────┬────┘
        │             │
        │◄────────────┘
        ▼
   ┌──────────┐
   │  Cart    │
   │(Drawer)  │
   └────┬─────┘
        │
        ▼
   ┌──────────┐
   │ Checkout │
   │Address + │
   │ Payment  │
   └────┬─────┘
        │
        ▼
   ┌──────────┐
   │  Orders  │
   │ History  │
   └────┬─────┘
        │
        ▼
   ┌─────────┐
   │   End   │
   └─────────┘
```

---

## Key Files Created/Modified

### New Pages:
- `src/pages/Auth.tsx` - Login/Signup
- `src/pages/Product.tsx` - Product details
- `src/pages/Checkout.tsx` - Checkout flow
- `src/pages/Orders.tsx` - Order history
- `src/pages/Wishlist.tsx` - Saved items

### New Components:
- `src/components/CartDrawer.tsx` - Cart panel
- `src/components/SizeGuide.tsx` - Size charts
- `src/components/PromoCodeInput.tsx` - Promo codes
- `src/components/SearchBar.tsx` - Search

### New Hooks/Context:
- `src/hooks/useAuth.tsx` - Authentication
- `src/hooks/useWishlist.tsx` - Wishlist
- `src/context/CartContext.tsx` - Cart state

### Data:
- `src/data/products.ts` - Product data with sizes, colors, descriptions

---

## Summary of Changes

| Feature | Before | After |
|---------|--------|-------|
| Authentication | ❌ None | ✅ Login/Signup |
| Cart | ❌ None | ✅ Full cart system |
| Wishlist | ❌ None | ✅ Save for later |
| Checkout | ❌ None | ✅ Address + Payment |
| Orders | ❌ None | ✅ Order tracking |
| Size Guide | ❌ None | ✅ Size charts |
| Database | ❌ None | ✅ 6 tables with RLS |
| Payments | ❌ None | ✅ COD, PhonePe, Paytm |

---

*Documentation prepared for VASTRA E-commerce Project*
*Last Updated: January 2026*
