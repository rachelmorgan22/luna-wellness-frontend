import morningFlowImg from "../assets/yogaOrange.png"; // placeholder image
import restorativeImg from "../assets/yogaPurple.png";   // placeholder image
import powerVinyasaImg from "../assets/yogaRed.png"; // placeholder image
import { Link } from "react-router-dom";

export default function Classes() {
  const classes = [
    {
      title: "Morning Flow",
      desc: "Energize your day with a sunrise sequence.",
      img: morningFlowImg,
    },
    {
      title: "Restorative Yoga",
      desc: "Gentle postures to release stress.",
      img: restorativeImg,
    },
    {
      title: "Power Vinyasa",
      desc: "Build strength and find balance.",
      img: powerVinyasaImg,
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
          Our Classes
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {classes.map((c, i) => (
            <div key={i} className="card overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-48 object-contain rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{c.title}</h3>
                <p className="text-gray-700">{c.desc}</p>
                <Link to="/signup">
                <button className="btn-primary mt-4">Join Class</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
