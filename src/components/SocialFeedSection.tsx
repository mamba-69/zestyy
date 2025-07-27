export default function SocialFeedSection() {
  // Mock Instagram posts data
  const instagramPosts = [
    {
      id: 1,
      caption:
        "Behind the scenes at our tomato processing facility! #ZestyRed #BehindTheScenes",
      likes: 245,
      comments: 18,
      imagePlaceholder: "Factory Tour",
    },
    {
      id: 2,
      caption:
        "Celebrating Diwali with ZestyRed! Check out these festive recipes using our ketchup. #FestiveRecipes #ZestyRed",
      likes: 312,
      comments: 27,
      imagePlaceholder: "Diwali Celebration",
    },
    {
      id: 3,
      caption:
        "Meet the farmers who grow our premium tomatoes! #FarmToBottle #ZestyRed",
      likes: 189,
      comments: 14,
      imagePlaceholder: "Tomato Farmers",
    },
    {
      id: 4,
      caption:
        "Try this delicious pasta recipe with ZestyRed ketchup! #RecipeOfTheDay #ZestyRed",
      likes: 278,
      comments: 32,
      imagePlaceholder: "Pasta Recipe",
    },
    {
      id: 5,
      caption:
        "New spicy variant launch party! Have you tried it yet? #SpicyZestyRed #NewLaunch",
      likes: 356,
      comments: 41,
      imagePlaceholder: "Product Launch",
    },
    {
      id: 6,
      caption:
        "Quality check in progress. We ensure every bottle meets our high standards! #QualityFirst #ZestyRed",
      likes: 167,
      comments: 9,
      imagePlaceholder: "Quality Check",
    },
  ];

  return (
    <section id="social" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-display">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get a glimpse behind the scenes, discover delicious recipes, and
            stay updated with our latest news and events.
          </p>
          <a
            href="https://instagram.com/zestyred"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium mt-4 hover:underline"
          >
            <span>@zestyred</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <div className="h-64 bg-gray-200 relative">
                {/* Placeholder for Instagram post image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">
                    {post.imagePlaceholder}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/zestyred"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
