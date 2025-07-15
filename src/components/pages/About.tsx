"use client";

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About <span className="text-brand-600">TechFlow</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At TechFlow, we are passionate about empowering businesses with
          innovative technology solutions. Our mission is to build the future,
          one line of code at a time.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Founded in 2015, TechFlow has grown into a leading technology partner
          for companies of all sizes. We specialize in web development, cloud
          solutions, cybersecurity, and much more.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our team of experts is dedicated to delivering high-quality, scalable,
          and secure solutions tailored to your unique business needs. We
          believe in collaboration, innovation, and continuous learning to stay
          ahead in the fast-paced tech landscape.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Innovation:</strong> We embrace new technologies and
            creative thinking to solve complex problems.
          </li>
          <li>
            <strong>Integrity:</strong> We maintain transparency and honesty in
            all our interactions.
          </li>
          <li>
            <strong>Customer Focus:</strong> Your success is our priority. We
            tailor solutions to meet your goals.
          </li>
          <li>
            <strong>Quality:</strong> We deliver reliable and maintainable
            software that stands the test of time.
          </li>
          <li>
            <strong>Collaboration:</strong> We work closely with clients and
            within our team to achieve the best results.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Our Journey
        </h2>
        <p className="text-gray-700 mb-6">
          Over the years, TechFlow has partnered with startups, enterprises, and
          non-profits to create impactful digital experiences. Our portfolio
          includes hundreds of successful projects across various industries.
        </p>
        <p className="text-gray-700 mb-6">
          We continuously invest in our team's growth and the latest tools to
          ensure we deliver cutting-edge solutions that drive business growth
          and efficiency.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-6">
          Interested in working with us or learning more about our services?
          Reach out to our team and let's start building the future together.
        </p>
      </div>
    </div>
  );
};

export default About;
