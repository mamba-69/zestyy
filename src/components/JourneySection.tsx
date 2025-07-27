import Image from "next/image";

export default function JourneySection() {
  const journeySteps = [
    {
      title: "Tomato Farming",
      description:
        "We partner with farmers in India's tomato belt regions like Nashik and Himachal Pradesh to grow the juiciest, ripest tomatoes.",
      imagePlaceholder: "Farm Image",
    },
    {
      title: "Harvesting",
      description:
        "Tomatoes are carefully hand-picked at peak ripeness to ensure the best flavor and nutritional value.",
      imagePlaceholder: "Harvesting Image",
    },
    {
      title: "Quality Selection",
      description:
        "Each tomato undergoes a rigorous selection process where only the best ones make it to the next stage.",
      imagePlaceholder: "Selection Image",
    },
    {
      title: "Transportation",
      description:
        "Selected tomatoes are transported in temperature-controlled vehicles to preserve freshness.",
      imagePlaceholder: "Transportation Image",
    },
    {
      title: "Processing",
      description:
        "Tomatoes are washed, sorted, and processed using our proprietary technique that preserves natural flavor.",
      imagePlaceholder: "Processing Image",
    },
    {
      title: "Bottling",
      description:
        "The finished ketchup is bottled in our hygienic facility using automated equipment to maintain consistency.",
      imagePlaceholder: "Bottling Image",
    },
  ];

  return (
    <section id="journey" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-display">
            Farm to Bottle Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Follow the journey of our tomatoes from the farms of India to your
            dining table, and discover how we create the perfect ketchup.
          </p>
        </div>

        <div className="relative">
          {/* Journey Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light transform -translate-x-1/2 z-0"></div>

          {/* Journey Steps */}
          <div className="space-y-12 relative z-10">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="md:w-1/2 p-6">
                  <div className="bg-white p-6 rounded-black shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-black font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="h-64 bg-gray-200 rounded-black relative flex items-center justify-center overflow-hidden">
                    {/* Journey step image */}
                    <Image 
                      src={index === 0 ? "https://iili.io/FvxWTmu.jpg" :
                          index === 1 ? "https://iili.io/Fvxk8X9.md.jpg" :
                          index === 2 ? "https://iili.io/FvxvFII.md.webp" :
                          index === 3 ? "https://iili.io/FvxvTp2.md.jpg" :
                          index === 4 ? "https://iili.io/FvxvjCF.md.webp" :
                          "https://iili.io/FvxSnR4.jpg"}
                      alt={step.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-black shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-black font-semibold font-display">
              Our Commitment to Sustainability
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h4 className="text-black font-semibold mb-2">
                Eco-Friendly Farming
              </h4>
              <p className="text-gray-600">
                We work with farmers who use sustainable farming practices to
                minimize environmental impact.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h4 className="text-black font-semibold mb-2">
                Responsible Packaging
              </h4>
              <p className="text-gray-600">
                Our packaging is designed to be recyclable and we&apos;re constantly
                working to reduce our carbon footprint.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="text-black font-semibold mb-2">
                Community Support
              </h4>
              <p className="text-gray-600">
                We invest in the communities where our tomatoes are grown,
                supporting local economies and families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
