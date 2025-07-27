import Link from "next/link";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Classic Tomato Ketchup",
      description:
        "Our signature ketchup with the perfect balance of sweetness and tanginess.",
      sizes: [
        { size: "200g", price: "₹75" },
        { size: "500g", price: "₹150" },
        { size: "1kg", price: "₹280" },
      ],
      imagePlaceholder: "Classic Ketchup Bottle",
    },
    {
      id: 2,
      name: "Spicy Tomato Ketchup",
      description:
        "A fiery twist to our classic ketchup with added Indian spices for that extra kick.",
      sizes: [
        { size: "200g", price: "₹85" },
        { size: "500g", price: "₹170" },
        { size: "1kg", price: "₹320" },
      ],
      imagePlaceholder: "Spicy Ketchup Bottle",
    },
    {
      id: 3,
      name: "Tomato Ketchup Pouch",
      description: "Convenient squeeze pouch for easy use and less waste.",
      sizes: [
        { size: "200g", price: "₹70" },
        { size: "500g", price: "₹140" },
      ],
      imagePlaceholder: "Ketchup Pouch",
    },
    {
      id: 4,
      name: "Bulk Industrial Pack",
      description: "Perfect for restaurants, hotels, and catering services.",
      sizes: [
        { size: "5kg", price: "₹1200" },
        { size: "10kg", price: "₹2200" },
      ],
      imagePlaceholder: "Bulk Ketchup Pack",
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-display">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium tomato ketchup products, crafted to
            enhance every meal with the authentic taste of fresh tomatoes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <div className="h-64 bg-gray-200 relative flex items-center justify-center">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">
                    {product.imagePlaceholder}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 mb-4">
                  <h4 className="text-black font-medium">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sizeOption, index) => (
                      <div
                        key={index}
                        className="bg-white px-3 py-1 rounded border border-gray-200"
                      >
                        <span className="text-black font-medium">
                          {sizeOption.size}
                        </span>{" "}
                        -{" "}
                        <span className="text-primary">{sizeOption.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="block w-full text-center bg-primary text-white font-medium py-2 rounded hover:bg-primary-dark transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl text-black font-semibold mb-4 font-display">
                Bulk Orders & Customization
              </h3>
              <p className="text-gray-600 mb-4">
                Looking for larger quantities or custom packaging for your
                business? We offer special pricing and customization options for
                bulk orders.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Custom branding options available</li>
                <li>Special formulations for commercial use</li>
                <li>Flexible packaging solutions</li>
                <li>Dedicated account manager for business clients</li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="bg-primary text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
