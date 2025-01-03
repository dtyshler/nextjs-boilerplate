import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Never Miss a Call From a Guest
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            24/7 AI-powered phone operator to handle emergencies, answer FAQs,
            and redirect calls to humans when needed. Ensure smooth guest
            communication with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#book-demo"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 text-lg"
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="text-blue-600 hover:underline text-lg"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/images/FriendlyRobotNoBackground.png" // Path to the image in the public folder
            alt="AI Phone Operator"
            width={500}
            height={500}
            className="mx-auto lg:ml-0"
            priority
          />
        </div>
      </div>
    </section>
  );
}
