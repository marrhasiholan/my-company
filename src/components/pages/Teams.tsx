"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
  };
  location: {
    city: string;
    country: string;
  };
  phone: string;
  login: {
    uuid: string;
  };
}

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const roles = [
    "CEO & Founder",
    "CTO",
    "Lead Developer",
    "Senior Developer",
    "UI/UX Designer",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
    "Marketing Director",
    "Sales Manager",
    "Project Manager",
    "Quality Assurance",
  ];

  const fetchTeamMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/?results=12");
      const data = await response.json();
      setTeamMembers(data.results);
    } catch (err) {
      setError("Failed to load team members. Please try again.");
      console.error("Error fetching team members:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const getRandomRole = (index: number) => {
    return roles[index % roles.length];
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Meet Our Team
          </h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-red-700 mb-4">{error}</p>
            <Button
              onClick={fetchTeamMembers}
              className="bg-brand-600 hover:bg-brand-700"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our diverse team of experts brings together years of experience in
            technology, design, and innovation to deliver exceptional results
            for our clients.
          </p>
          <Button
            onClick={fetchTeamMembers}
            variant="outline"
            className="border-2"
            disabled={loading}
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Loading..." : "Refresh Team"}
          </Button>
        </motion.div>

        {/* Team Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(12)].map((_, index) => (
              <Card key={index} className="shadow-lg border-0 animate-pulse">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.login.uuid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.picture.large}
                        alt={`${member.name.first} ${member.name.last}`}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-brand-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name.first} {member.name.last}
                    </h3>

                    <p className="text-brand-600 font-medium mb-4">
                      {getRandomRole(index)}
                    </p>

                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {member.location.city}, {member.location.country}
                      </div>
                      <div className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {member.email}
                      </div>
                      <div className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2" />
                        {member.phone}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-3">
                      <Button size="sm" variant="outline" className="p-2">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Company Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Innovation First
                </h3>
                <p className="text-gray-600">
                  We encourage creative thinking and embrace new technologies to
                  stay ahead of the curve.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaborative Spirit
                </h3>
                <p className="text-gray-600">
                  Our diverse team works together seamlessly, combining
                  different perspectives for better solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Continuous Learning
                </h3>
                <p className="text-gray-600">
                  We invest in our team's growth through training, conferences,
                  and skill development programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;
