import { Button } from "@/components/ui/button";
import { Printer, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Changelog = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 flex gap-2 z-50">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="bg-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={handlePrint} className="bg-primary text-primary-foreground">
          <Printer className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
      </div>

      {/* Printable Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-4">
        {/* Header */}
        <div className="text-center border-b-2 border-black pb-6 mb-8">
          <h1 className="text-4xl font-bold mb-2">VASTRA</h1>
          <p className="text-xl">Project Documentation</p>
          <p className="text-sm text-gray-600 mt-2">
            Converting an E-commerce Template into a Full-Stack Clothing Store
          </p>
        </div>

        {/* Week 1 Header */}
        <div className="border-2 border-black p-4 mb-6 text-center">
          <h2 className="text-2xl font-bold">WEEK 1</h2>
          <p>Setting Up Base Template & Adding Core Features</p>
        </div>

        {/* Section 1 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            1. Overall Purpose Change
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original Template:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Basic e-commerce landing page template</li>
                <li>Static product display with no functionality</li>
                <li>No user interaction or data persistence</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Website:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Full-stack e-commerce clothing store</li>
                <li>User authentication, cart, wishlist</li>
                <li>Complete shopping flow</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 p-3">
            <p className="text-sm">
              <strong>Explanation:</strong> The template was transformed from a static
              showcase into a functional online store with real user accounts and
              order processing.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            2. Branding & Identity Changes
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Generic e-commerce branding</li>
                <li>Standard headings and descriptions</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Site:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Branded as "VASTRA"</li>
                <li>Dark theme with amber/gold accents</li>
                <li>Indian Rupee (₹) currency</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 p-3">
            <p className="text-sm">
              <strong>Impact:</strong> Website now has a distinct identity focused on
              Indian fashion retail.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            3. Navigation & Section Structure Changes
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original Sections:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Modified Sections:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Home (Hero, Collections, Featured)</li>
                <li>Product Detail Pages</li>
                <li>Authentication (Login/Signup)</li>
                <li>Cart, Wishlist, Checkout, Orders</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 p-3">
            <p className="text-sm">
              <strong>Explanation:</strong> Removed unnecessary sections and added
              e-commerce specific pages for complete shopping experience.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            4. Product Display Changes
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Static product cards</li>
                <li>No product details page</li>
                <li>No size/color options</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Individual product pages</li>
                <li>Size selection (XS to XXL)</li>
                <li>Color selection with swatches</li>
                <li>Quantity selector</li>
                <li>Size Guide modal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            5. Authentication System
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>No user authentication</li>
                <li>No user accounts</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Login page with email/password</li>
                <li>Signup page with validation</li>
                <li>Session persistence</li>
                <li>Protected routes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            6. Shopping Cart System
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2">
                <li>No cart functionality</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Cart Context for state</li>
                <li>Slide-out Cart Drawer</li>
                <li>Add/Remove items</li>
                <li>Quantity adjustment</li>
                <li>Promo code support</li>
                <li>localStorage persistence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            7. Wishlist System
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2">
                <li>No wishlist functionality</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Heart icon to save products</li>
                <li>Wishlist page</li>
                <li>Move to cart feature</li>
                <li>Database sync for users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            8. Checkout System
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2">
                <li>No checkout process</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Address management</li>
                <li>Payment options:</li>
                <li className="ml-4">- Cash on Delivery</li>
                <li className="ml-4">- PhonePe</li>
                <li className="ml-4">- Paytm</li>
                <li className="ml-4">- Other UPI Apps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            9. Orders System
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2">
                <li>No order tracking</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Orders page with history</li>
                <li>Order status tracking</li>
                <li>Cancel order feature</li>
                <li>Order details view</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            10. Size Guide Feature
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2">
                <li>No size guidance</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">My Changes:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Size Guide modal</li>
                <li>Clothing: Chest, Waist, Hip</li>
                <li>Footwear: UK, US, EU sizes</li>
                <li>How to Measure guide</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 11 - CSS */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            11. CSS and Styling
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold underline">Original:</p>
              <ul className="list-disc ml-5 text-sm mt-2">
                <li>Default template styling</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline">Modified:</p>
              <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                <li>Dark theme (#0A0A0B)</li>
                <li>Amber/Gold accents</li>
                <li>Glass morphism navbar</li>
                <li>Framer Motion animations</li>
                <li>Responsive design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Database Schema */}
        <section className="mb-8 border-2 border-black p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            Database Schema Created
          </h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left p-2">Table</th>
                <th className="text-left p-2">Purpose</th>
                <th className="text-left p-2">RLS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-mono">profiles</td>
                <td className="p-2">User profile info</td>
                <td className="p-2">User-specific</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono">addresses</td>
                <td className="p-2">Delivery addresses</td>
                <td className="p-2">User-specific</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono">orders</td>
                <td className="p-2">Order information</td>
                <td className="p-2">User-specific</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono">order_items</td>
                <td className="p-2">Items in orders</td>
                <td className="p-2">Via order</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono">wishlist</td>
                <td className="p-2">Saved products</td>
                <td className="p-2">User-specific</td>
              </tr>
              <tr>
                <td className="p-2 font-mono">promo_codes</td>
                <td className="p-2">Discount codes</td>
                <td className="p-2">Public read</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Flowchart */}
        <section className="mb-8 border-2 border-black p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4 text-center">
            Working Flowchart
          </h3>
          <div className="flex flex-col items-center text-sm">
            <div className="border-2 border-black rounded-full px-6 py-2">Start</div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="border-2 border-black px-4 py-2">Landing/Hero Section</div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="flex gap-4">
              <div className="border border-black px-3 py-1">Browse</div>
              <div className="border border-black px-3 py-1">Search</div>
              <div className="border border-black px-3 py-1">Auth</div>
            </div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="border border-black px-4 py-2">Product Page (Size/Color)</div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="flex gap-4">
              <div className="border border-black px-3 py-1">Add Cart</div>
              <div className="border border-black px-3 py-1">Wishlist</div>
            </div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="border border-black px-4 py-2">Cart Drawer</div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="border border-black px-4 py-2">Checkout (Address + Payment)</div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="border border-black px-4 py-2">Orders History</div>
            <div className="w-0.5 h-4 bg-black"></div>
            <div className="border-2 border-black rounded-full px-6 py-2">End</div>
          </div>
        </section>

        {/* Key Files */}
        <section className="mb-8 border border-gray-300 p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">
            Key Files Created/Modified
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold underline mb-2">New Pages:</p>
              <ul className="list-disc ml-5 space-y-1 font-mono text-xs">
                <li>src/pages/Auth.tsx</li>
                <li>src/pages/Product.tsx</li>
                <li>src/pages/Checkout.tsx</li>
                <li>src/pages/Orders.tsx</li>
                <li>src/pages/Wishlist.tsx</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold underline mb-2">New Components:</p>
              <ul className="list-disc ml-5 space-y-1 font-mono text-xs">
                <li>src/components/CartDrawer.tsx</li>
                <li>src/components/SizeGuide.tsx</li>
                <li>src/components/PromoCodeInput.tsx</li>
                <li>src/components/SearchBar.tsx</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold underline mb-2">Hooks/Context:</p>
            <ul className="list-disc ml-5 space-y-1 font-mono text-xs">
              <li>src/hooks/useAuth.tsx - Authentication</li>
              <li>src/hooks/useWishlist.tsx - Wishlist</li>
              <li>src/context/CartContext.tsx - Cart state</li>
            </ul>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-8 border-2 border-black p-4">
          <h3 className="text-lg font-bold border-b border-black pb-2 mb-4 text-center">
            Summary of Changes
          </h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left p-2">Feature</th>
                <th className="text-center p-2">Before</th>
                <th className="text-center p-2">After</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Authentication</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Cart</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Wishlist</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Checkout</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Orders</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Size Guide</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Database</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅ 6 tables</td>
              </tr>
              <tr>
                <td className="p-2">Payments</td>
                <td className="p-2 text-center">❌</td>
                <td className="p-2 text-center">✅ COD, PhonePe, Paytm</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <div className="text-center border-t-2 border-black pt-6 mt-8">
          <p className="text-sm text-gray-600">
            Documentation prepared for VASTRA E-commerce Project
          </p>
          <p className="text-sm text-gray-600">Last Updated: January 2026</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:p-4 {
            padding: 1rem !important;
          }
          section {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default Changelog;
