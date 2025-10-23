import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    classType: "",
  });

  const [success, setSuccess] = useState("");

  const classes = ["Morning Flow", "Restorative Yoga", "Power Vinyasa"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://luna-wellness-backend-2.onrender.com/api/signups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(
          `Thanks ${data.name}! You signed up for ${data.classType}. We'll email you at ${data.email}.`
        );
        setFormData({ name: "", email: "", classType: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Please try again later.");
    }
  };
  

  return (
    <section className="py-16 bg-green-50 min-h-screen">
      <div className="container max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
          Sign Up for a Class
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <select
            name="classType"
            value={formData.classType}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="">Select a Class</option>
            {classes.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button type="submit" className="btn-primary mt-4">
            Submit
          </button>
        </form>
        {success && (
          <p className="mt-4 text-green-700 font-medium text-center">{success}</p>
        )}
      </div>
    </section>
  );
}
