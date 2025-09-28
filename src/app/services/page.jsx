// app/services/page.jsx
"use client";

const servicesData = [
  {
    title: "🎨 Design & Branding",
    items: [
      "Graphic Design – Social media creatives, brochures, posters, catalogs.",
      "Logo & Brand Identity – Logos, brand guidelines, corporate identity.",
      "Personal Branding – Profile design, content strategy, positioning.",
      "Brand Strategy & Consulting – Voice, positioning & long-term brand growth.",
      "Packaging Design – Product labels, retail packaging & creative concepts.",
      "Stationery & Corporate Identity – Business cards, letterheads, envelopes, office branding.",
      "Creative Campaign Design – Event branding, product launches, ad campaigns.",
      "UI/UX Design – Mobile apps, website interfaces, wireframes, prototypes.",
      "Presentation Design – Pitch decks, company profiles, investor presentations.",
      "Print Collateral – Flyers, catalogs, signage, exhibition branding.",
    ],
  },
  {
    title: "🌐 Digital Marketing",
    items: [
      "Search Engine Optimization (SEO) – On-page, off-page & technical SEO.",
      "Search Engine Marketing (Google Ads / PPC) – Paid search & display ads.",
      "Social Media Marketing (SMM) – Facebook, Instagram, LinkedIn, Twitter growth.",
      "Meta Ads – Facebook & Instagram ad campaigns.",
      "YouTube Ads – Targeted video ads for awareness & conversions.",
      "Content Marketing – Blogs, case studies, content strategies.",
      "Email Marketing – Campaign creation, automation & newsletters.",
      "Influencer Marketing – Collaborations with creators for brand reach.",
      "Affiliate Marketing Setup – Programs to drive sales with affiliates.",
      "Online Reputation Management (ORM) – Reviews, ratings & trust building.",
      "Digital Marketing Packages (360°) – All-in-one tailored growth solutions.",
      "GMB Profile Creation & Optimization – Setup, SEO & posting.",
      "Analytics & Conversion Tracking – GA4, Meta Pixel, conversion reporting.",
    ],
  },
  {
    title: "💻 Website & Tech",
    items: [
      "Website Design & Development – Corporate, eCommerce & responsive sites.",
      "Custom Web Applications – Tailored platforms for business processes.",
      "Landing Pages & Sales Funnels – High-conversion single-page sites.",
      "Portfolio & Showcase Websites – Clean, modern presentation sites.",
      "WordPress / CMS Websites – Easy-to-manage platforms.",
      "E-commerce Development – Online stores, payment gateways, inventory setup.",
      "Website Redesign & Revamp – Modernizing old websites.",
      "Web Maintenance & Security – Updates, backups, malware protection.",
      "UI/UX Prototyping & Testing – Wireframes, mockups & user testing.",
      "Hosting & Domain Setup – End-to-end website launch support.",
      "App UI/UX Design (Optional) – Mobile app interface design.",
    ],
  },
  {
    title: "🖨 Print Media & LED Sign Board Services",
    items: [
      "Flex Printing & LED Sign Boards – High-quality outdoor branding.",
      "Offset Printing – Business cards, letterheads, catalogs, flyers.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="space-y-12">
          {servicesData.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
