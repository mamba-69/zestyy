export default function QualitySection() {
  const certifications = [
    {
      name: "FSSAI Certified",
      description:
        "Approved by Food Safety and Standards Authority of India, ensuring compliance with all food safety regulations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      name: "ISO 22000:2018",
      description:
        "International standard for food safety management systems, demonstrating our commitment to food safety.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      name: "HACCP Compliant",
      description:
        "Hazard Analysis Critical Control Point system implemented to ensure food safety throughout our production process.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "GMP Certified",
      description:
        "Good Manufacturing Practices certification, ensuring consistent quality in our production processes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  const qualityChecks = [
    {
      title: "Raw Material Inspection",
      description:
        "Every batch of tomatoes undergoes thorough inspection for ripeness, color, and quality before processing.",
    },
    {
      title: "Microbiological Testing",
      description:
        "Regular testing to ensure our products are free from harmful microorganisms and safe for consumption.",
    },
    {
      title: "Sensory Evaluation",
      description:
        "Our expert panel conducts taste tests to ensure consistent flavor, texture, and appearance.",
    },
    {
      title: "Packaging Integrity",
      description:
        "Rigorous checks to ensure our packaging is secure, preventing contamination and preserving freshness.",
    },
    {
      title: "Shelf-Life Testing",
      description:
        "Comprehensive testing to determine and guarantee the shelf life of our products under various conditions.",
    },
    {
      title: "Final Product Inspection",
      description:
        "Every batch is inspected before shipping to ensure it meets our high standards of quality.",
    },
  ];

  return (
    <section id="quality" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-display">
            Quality & Hygiene Standards
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At ZestyRed, we maintain the highest standards of quality and
            hygiene throughout our production process, from farm to bottle.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl text-black font-semibold mb-8 text-center font-display">
            Our Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <h4 className="text-black font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Checks */}
        <div className="mb-16">
          <h3 className="text-2xl text-black font-semibold mb-8 text-center font-display">
            Daily Quality Checks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityChecks.map((check, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold mr-4">
                    {index + 1}
                  </div>
                  <h4 className="text-black font-semibold">{check.title}</h4>
                </div>
                <p className="text-gray-600">{check.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eco-Friendly Packaging */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl text-black font-semibold mb-4 font-display">
                Eco-Friendly Packaging
              </h3>
              <p className="text-gray-600 mb-4">
                We are committed to reducing our environmental footprint through
                sustainable packaging solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Glass bottles that are 100% recyclable and can be reused
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    BPA-free plastic pouches that use 75% less plastic than
                    rigid containers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Bulk packaging options for businesses to reduce overall
                    packaging waste
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Shipping materials made from recycled content and designed
                    for recyclability
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 h-64 bg-gray-200 rounded-lg relative flex items-center justify-center">
              {/* Placeholder for eco-friendly packaging image */}
              <div className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-lg">
                  Eco-Friendly Packaging Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
