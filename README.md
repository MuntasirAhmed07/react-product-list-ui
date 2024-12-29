React Product Listing UI
A simple React application that fetches products from DummyJSON API and displays them in a user-friendly layout based on the provided Figma design. It includes Add to Cart functionality, showing items added to the cart in real-time.

Live Preview :- https://react-product-list-ui-bq7s.vercel.app/

Features
Fetch & Display Products: Retrieves products from the DummyJSON API and renders them in a grid layout.
Add to Cart: Users can add a product to their cart; the card updates to reflect the “Added in Cart” state.
State Management: Uses React’s local state or a global store (e.g., Zustand/Context) to handle cart functionality.
Responsive UI: The layout is designed to be mobile-friendly and aligns with the pixel-perfect requirements from the Figma design.
Installation & Setup
Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install Dependencies

npm install
or

yarn
Run the Development Server

npm run dev
Then open http://localhost:3000 (or the indicated port) in your browser.

Project Structure (Example)

src/
├─ apiRequest/
│ └─ apiRequest.js # Contains the product fetch logic
├─ assets/ # SVG icons and images
├─ components/
│ ├─ Product.jsx
│ └─ ProductList.jsx
├─ layouts/
│ └─ Layout.jsx
├─ pages/
│ └─ HomePage.jsx
├─ store/ (optional) # Contains Zustand or any global store
└─ App.jsx
Usage
Viewing Products: The home page displays a grid of products with title, image, price, and discount.
Adding to Cart: Click Add to Cart to put a product into the cart. The button updates to show a quantity increment/decrement interface.
Removing from Cart: Click the Trash icon to remove or decrement the product quantity from the cart.
Notes
The design references come from the Figma file.
You can switch between local state or a global store (like Zustand) to manage the cart, depending on your preference and future scalability needs.
License
This project is open source and available under the MIT License.

Feel free to adjust the README to match your exact repository name, directory structure, or any additional features you implemented.
