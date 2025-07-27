import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-light to-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Taste the <span className="text-accent">Real Red</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Experience the authentic flavor of premium tomatoes with ZestyRed
              - India&apos;s finest ketchup crafted with care from farm to bottle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/journey"
                className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Our Journey
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              <Image
                src="https://iili.io/FvoUD5x.md.png"
                alt="Ketchup Bottle"
                width={296}
                height={296}
                className="animate-bounce"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
