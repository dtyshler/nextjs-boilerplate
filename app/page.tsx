import Image from "next/image";
import HeroSection from "./herosection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center font-sans bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-md px-8 sm:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/images/RivieraLogo-removebg-preview.png" alt="Your Logo" width={60} height={60} />
          <h1 className="text-xl font-bold text-gray-800">Riviera Labs</h1>
        </div>
        <nav className="hidden sm:flex gap-6 text-gray-600">
          <a href="#home" className="hover:text-gray-800">
            Home
          </a>
          <a href="#features" className="hover:text-gray-800">
            Features
          </a>
          <a href="#use-cases" className="hover:text-gray-800">
            Use Cases
          </a>
          <a href="#contact" className="hover:text-gray-800">
            Contact
          </a>
        </nav>
        <a
          href="#schedule-demo"
          className="rounded-full bg-red-500 text-white px-4 py-2 text-sm hover:bg-red-600"
        >
          Schedule Demo
        </a>
      </header>

      <HeroSection></HeroSection>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center text-center py-16 px-8 sm:px-20 bg-white"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          The 24/7 AI Phone Operator for Hotels
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Voice AI for hotels that answers calls, takes orders, handles questions, books reservations & more so you never miss a call again.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-lg">
          <input
            type="text"
            placeholder="📞 Phone Number"
            className="flex-1 border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="✉️ Enter email address"
            className="flex-1 border rounded px-4 py-2"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-blue-600"
          >
            Get In Touch
          </button>
        </form>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-8 sm:px-20 bg-gray-50 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Features of Our AI Phone Agent
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AI Phone Orders
            </h3>
            <p className="text-gray-600">
              Effortlessly take phone orders and handle inquiries, so your staff
              can focus on other tasks.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Custom Training
            </h3>
            <p className="text-gray-600">
              Tailored to your hotel's unique needs, ensuring every guest gets
              the right answers.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section
        id="integrations"
        className="py-16 px-8 sm:px-20 bg-blue-50 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Works Seamlessly with Your Existing Systems
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          Integrates with leading POS and reservation systems to streamline
          operations without missing a beat.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/revel-logo.svg" alt="Revel" width={60} height={60} />
          <Image src="/square-logo.svg" alt="Square" width={60} height={60} />
          <Image src="/spoton-logo.svg" alt="SpotOn" width={60} height={60} />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p>© 2024 RivieraLabs.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
