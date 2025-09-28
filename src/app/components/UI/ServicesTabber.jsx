"use client";

import React, { useState } from "react";
import "../../styles/service-tabber.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

// Tabs for categories
const tabs = [
  { id: "designBranding", label: "Design & Branding" },
  { id: "digitalMarketing", label: "Digital Marketing" },
  { id: "websiteTech", label: "Website & Tech" },
  { id: "printMedia", label: "Print Media" },
];

// All services data
const services = {
  designBranding: [
    {
      title: "Graphic Design",
      description: "Social media creatives, brochures, posters, catalogs.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Logo & Brand Identity",
      description: "Logos, brand guidelines, corporate identity.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Personal Branding",
      description: "Profile design, content strategy, positioning.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "Brand Strategy & Consulting",
      description: "Voice, positioning & long-term brand growth.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "Packaging Design",
      description: "Product labels, retail packaging & creative concepts.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Stationery & Corporate Identity",
      description: "Business cards, letterheads, envelopes, office branding.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Creative Campaign Design",
      description: "Event branding, product launches, ad campaigns.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "UI/UX Design",
      description: "Mobile apps, website interfaces, wireframes, prototypes.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "Presentation Design",
      description: "Pitch decks, company profiles, investor presentations.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Print Collateral",
      description: "Flyers, catalogs, signage, exhibition branding.",
      provider: "RDM",
      image: team02,
    },
  ],
  digitalMarketing: [
    {
      title: "Search Engine Optimization (SEO)",
      description: "On-page, off-page & technical SEO.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Search Engine Marketing (Google Ads / PPC)",
      description: "Paid search & display ads.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Facebook, Instagram, LinkedIn, Twitter growth.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "Meta Ads",
      description: "Facebook & Instagram ad campaigns.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "YouTube Ads",
      description: "Targeted video ads for awareness & conversions.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Content Marketing",
      description: "Blogs, case studies, content strategies.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Email Marketing",
      description: "Campaign creation, automation & newsletters.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "Influencer Marketing",
      description: "Collaborations with creators for brand reach.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "Affiliate Marketing Setup",
      description: "Programs to drive sales with affiliates.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Online Reputation Management (ORM)",
      description: "Reviews, ratings & trust building.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Digital Marketing Packages (360°)",
      description: "All-in-one tailored growth solutions.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "GMB Profile Creation & Optimization",
      description: "Setup, SEO & posting.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "Analytics & Conversion Tracking",
      description: "GA4, Meta Pixel, conversion reporting.",
      provider: "RDM",
      image: team01,
    },
  ],
  websiteTech: [
    {
      title: "Website Design & Development",
      description: "Corporate, eCommerce & responsive sites.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Custom Web Applications",
      description: "Tailored platforms for business processes.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "Landing Pages & Sales Funnels",
      description: "High-conversion single-page sites.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "Portfolio & Showcase Websites",
      description: "Clean, modern presentation sites.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "WordPress / CMS Websites",
      description: "Easy-to-manage platforms.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "E-commerce Development",
      description: "Online stores, payment gateways, inventory setup.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "Website Redesign & Revamp",
      description: "Modernizing old websites.",
      provider: "RDM",
      image: team04,
    },
    {
      title: "Web Maintenance & Security",
      description: "Updates, backups, malware protection.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "UI/UX Prototyping & Testing",
      description: "Wireframes, mockups & user testing.",
      provider: "RDM",
      image: team02,
    },
    {
      title: "Hosting & Domain Setup",
      description: "End-to-end website launch support.",
      provider: "RDM",
      image: team03,
    },
    {
      title: "App UI/UX Design (Optional)",
      description: "Mobile app interface design.",
      provider: "RDM",
      image: team04,
    },
  ],
  printMedia: [
    {
      title: "Flex Printing & LED Sign Boards",
      description: "High-quality outdoor branding.",
      provider: "RDM",
      image: team01,
    },
    {
      title: "Offset Printing",
      description: "Business cards, letterheads, catalogs, flyers.",
      provider: "RDM",
      image: team02,
    },
  ],
};

export default function ServicesTabber({ theme }) {
  const [activeTab, setActiveTab] = useState("designBranding");

  return (
    <section>
      <div className="container" id="services">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-9">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`primary__btn ${
                activeTab === tab.id
                  ? "secondary__btn"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {services[activeTab] && services[activeTab].length > 0 ? (
            services[activeTab].map((service, idx) => (
              <div
                key={idx}
                className="bg-scard rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={service.image.src}
                    alt={service.title}
                    className="w-full h-44 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <p className="text-xs text-gray-500">
                    Provided by {service.provider}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-3">
              No services available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
