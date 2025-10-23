import yogaImage02 from "../assets/yoga02.jpg";

export default function About() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
            About Us
          </h2>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Illustration */}
            <div className="flex justify-center">
              <img
                src= {yogaImage02}
                alt="Yoga illustration"
                className="rounded-2xl shadow-md"
              />
            </div>
  
            {/* Right: Text */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-md">
              <p className="text-gray-700 leading-relaxed mb-4">
                At <span className="font-semibold">Organic Yoga & Wellness</span>, we
                believe in holistic health rooted in connection with nature. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our teachers guide you through mindful practices designed to refresh
                body, mind, and spirit. Whether you’re a beginner or an experienced
                yogi, our community welcomes you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Join us for group classes, workshops, and wellness events that bring
                balance and vitality into your life.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  