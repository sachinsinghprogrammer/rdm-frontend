"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactForm({ career = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    services: [],
    message: "",
    resume: null,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      career
        ? `Thanks ${
            formData.name || "there"
          }, your career request has been received.`
        : `Thanks ${formData.name || "there"}, your request has been received.`
    );
  };

  return (
    <>
      <div className="text-center mb-16">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-6">
            {career ? "Join Our Team" : "Get In Touch"}
          </h2>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto subtitle">
          {career
            ? "Excited to grow with us? Share your details and let’s build something amazing together."
            : "Ready to transform your digital presence? Let's discuss how we can help your business grow."}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 pt-0 grid md:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-2 highlight">
            {career
              ? "Submit Your Application"
              : "Get Your Free Strategy Session"}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            {career
              ? "Tell us about yourself and upload your resume."
              : "Tell us about your business and we'll create a custom growth plan for you."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <input
                  className="w-full border rounded-lg p-2"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>

              {career ? (
                <>
                  <div>
                    <label className="text-sm font-medium">Phone *</label>
                    <input
                      className="w-full border rounded-lg p-2"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      Upload Resume *
                    </label>
                    <input
                      type="file"
                      className="w-full border rounded-lg p-2"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        handleChange("resume", e.target.files?.[0])
                      }
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-sm font-medium">
                      Company Name *
                    </label>
                    <input
                      className="w-full border rounded-lg p-2"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      className="w-full border rounded-lg p-2"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Conditional Sections */}
            {career ? (
              <div>
                <label className="text-sm font-medium">
                  Why do you want to join us?
                </label>
                <textarea
                  className="w-full border rounded-lg p-2"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your career goals..."
                />
              </div>
            ) : (
              <>
                {/* Marketing Budget */}
                <div>
                  <label className="text-sm font-medium">
                    Monthly Marketing Budget
                  </label>
                  <select
                    className="w-full border rounded-lg p-2"
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                  >
                    <option value="">Select your budget range</option>
                    <option value="15-20k">₹15,000 – ₹20,000</option>
                    <option value="20-30k">₹20,000 – ₹30,000</option>
                    <option value="30-40k">₹30,000 – ₹40,000</option>
                    <option value="40-50k">₹40,000 – ₹50,000</option>
                    <option value="50+">₹50,000 and above</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                {/* Services */}
                <div>
                  <label className="text-sm font-medium">
                    Services You're Interested In *
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {[
                      "SEO Optimization",
                      "PPC Advertising",
                      "Social Media Marketing",
                      "Content Marketing",
                      "Web Development",
                      "Analytics & Reporting",
                    ].map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => toggleService(service)}
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium">
                    Tell us about your goals and challenges
                  </label>
                  <textarea
                    className="w-full border rounded-lg p-2"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Describe your business goals..."
                  />
                </div>
              </>
            )}

            {/* Submit */}
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                {career ? "Submit Application" : "Send My Request"}
              </button>
              <p className="text-gray-400 text-sm">
                Please fill in all required fields (marked with *)
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="space-y-6">
          {career ? (
            <div className="p-6 rounded-2xl shadow-md space-y-4">
              <h2 className="text-lg font-bold">Careers at Our Company</h2>
              <p className="text-white">
                We’re always looking for passionate, talented people to join our
                growing team. Apply now and let’s build the future together.
              </p>
              <p className="text-gray-400 text-sm">
                • Flexible Work Environment <br />
                • Learning & Growth Opportunities <br />• Collaborative Team
                Culture
              </p>
              <div className="bg-gray-900 text-white p-4 rounded-lg mt-4">
                <p className="font-semibold">HR Contact</p>
                <p>Email: hr@company.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </div>
          ) : (
            <>
              <div className="p-6 rounded-2xl shadow-md space-y-4">
                <h2 className="text-lg font-bold">Get In Touch</h2>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold mb-0 subtitle">Email</p>
                    <p className="text-white">
                      info@reliantdesignsandmarketing.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold mb-0 subtitle">Phone</p>
                    <p className="text-white">+91 7875265561</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold mb-0 subtitle">Address</p>
                    <p className="text-white">
                      Shop No. 15, Kakkad Madhukosh Society, near Yashoda Chowk,
                      Balewadi, Pune, Maharashtra 411045
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold mb-0 subtitle">
                      Business Hours
                    </p>
                    <p className="text-white">Mon-Sat: 9AM-6PM IST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
                <p className="font-semibold">Need Immediate Help?</p>
                <p className="text-sm">
                  For urgent inquiries, call us directly.
                </p>
                <p className="mt-2 font-bold">+91 7875265561</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
