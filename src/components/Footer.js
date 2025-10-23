export default function Footer() {
    return (
      <footer className="bg-amber-50 text-green-900 font-serif py-6 mt-12 shadow-inner">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Luna Wellness</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/" className="hover:text-green-700 transition">Privacy</a>
            <a href="/" className="hover:text-green-700 transition">Terms</a>
            <a href="/" className="hover:text-green-700 transition">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  