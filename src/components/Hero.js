import { Link } from "react-router-dom";
import yogaImage from "../assets/yoga.jpg";

export default function Hero() {
    return (
      <section className="bg-green-100 py-20">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-green-900">
              Organic Yoga & Wellness
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Find balance, breathe deeply, and embrace nature’s flow.  
              Join our community for mindful movement and connection.
            </p>
            <Link to="/classes">
            <button className="btn-primary">Join a Class</button>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src= {yogaImage}
              alt="Yoga Pose"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  