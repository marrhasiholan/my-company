"use client";

import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
          At TechFlow, we provide a wide range of technology solutions designed
          to help your business thrive in the digital era. Our expert team is
          dedicated to delivering innovative, scalable, and secure services
          tailored to your unique needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-brand-600 mb-4">
              Web Development
            </h2>
            <p className="text-gray-700 mb-4">
              We build modern, responsive websites and web applications using
              the latest technologies to ensure performance, scalability, and
              user engagement.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Custom React & Next.js applications</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>API integration and development</li>
              <li>SEO optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-brand-600 mb-4">
              Cloud Solutions
            </h2>
            <p className="text-gray-700 mb-4">
              Our cloud experts design and implement scalable cloud
              infrastructure to optimize your operations and reduce costs.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>AWS, Azure, and Google Cloud deployment</li>
              <li>Microservices architecture</li>
              <li>Continuous integration and delivery (CI/CD)</li>
              <li>Cloud security and compliance</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-brand-600 mb-4">
              Cybersecurity
            </h2>
            <p className="text-gray-700 mb-4">
              Protect your business with our comprehensive cybersecurity
              services, including risk assessment, penetration testing, and
              ongoing monitoring.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Security audits and compliance</li>
              <li>Penetration testing</li>
              <li>Threat detection and response</li>
              <li>Employee security training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
