export default function Contact() {
    return (
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
            Contact Us
          </h2>
          <form className="max-w-lg mx-auto card space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  