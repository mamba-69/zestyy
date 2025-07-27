import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4 font-display">
            About ZestyRed
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are India&apos;s premium tomato ketchup brand, committed to bringing
            the authentic taste of fresh tomatoes to your table with the highest
            quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Factory Image Card */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-64 bg-gray-200 relative flex items-center justify-center">
              <Image
                src="https://iili.io/Fvx0ZkG.md.png"
                alt="Factory Image"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-2">
                State-of-the-Art Factory
              </h3>
              <p className="text-gray-600">
                Our modern production facility is equipped with the latest
                technology to ensure consistent quality and taste in every
                bottle of ZestyRed ketchup.
              </p>
            </div>
          </div>

          {/* Processing Unit Card */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-64 bg-gray-200 relative flex items-center justify-center">
              <Image
                src="https://iili.io/FvoPWMB.md.jpg"
                alt="Processing Unit"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-2">
                Advanced Processing Units
              </h3>
              <p className="text-gray-600">
                Our tomatoes go through a meticulous processing system that
                preserves their natural flavor while ensuring the highest food
                safety standards.
              </p>
            </div>
          </div>

          {/* Hygiene Protocols Card */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-64 bg-gray-200 relative flex items-center justify-center">
              <Image
                src="https://iili.io/Fvx114t.md.webp"
                alt="Hygiene Protocols"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-2">
                Strict Hygiene Protocols
              </h3>
              <p className="text-gray-600">
                Our staff follows rigorous hygiene protocols with gloved
                handling, hairnets, and regular sanitization to ensure the
                highest level of food safety.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl text-black font-semibold mb-4 font-display">
                Our Commitment to Quality
              </h3>
              <p className="text-gray-600 mb-4">
                At ZestyRed, we believe that great ketchup starts with great
                tomatoes. That&apos;s why we source only the finest tomatoes from
                 selected farms across India&apos;s tomato belt.
              </p>
              <p className="text-gray-600 mb-4">
                Our production process combines traditional recipes with modern
                technology to create a ketchup that&apos;s rich in flavor, vibrant in
                color, and perfect in consistency.
              </p>
              <p className="text-gray-600">
                Every bottle of ZestyRed ketchup undergoes strict quality checks
                before it reaches your table, ensuring that you get nothing but
                the best.
              </p>
            </div>
            <div className="md:w-1/2 h-64 bg-gray-200 rounded-lg relative flex items-center justify-center">
              {/* Placeholder for quality check image */}
              <div className="absolute inset-0 overflow-hidden bg-gray-300 rounded-lg flex items-center justify-center">
                <Image
                  src="https://iili.io/FvxMoCl.md.jpg"
                  alt="Quality Check"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
