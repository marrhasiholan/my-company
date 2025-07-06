"use client";

import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface TeamMember {
  login: { uuid: string };
  name: { first: string; last: string };
  picture: { large: string };
  email: string;
  location: { city: string; country: string };
}

export default function TeamsPage() {
  const { data, isLoading, isError, error } = useQuery<TeamMember[]>({
    queryKey: ["teamMembers"],
    queryFn: async ({ signal }: QueryFunctionContext): Promise<TeamMember[]> => {
      const res = await fetch("https://randomuser.me/api/?results=10&nat=us", { signal }); // ambil 10 user AS
      if (!res.ok) {
        throw new Error("Failed to fetch team members");
      }
      const data = await res.json();
      return data.results;
    },
    staleTime: 5 * 60 * 1000, // data dianggap "stale" setelah 5 menit
    gcTime: 10 * 60 * 1000, // data tetap di cache selama 10 menit
  });

  // Fungsi simulasi peran dan bio singkat
  const getRoleAndBio = (name: string) => {
    const roles = [
      "Software Engineer",
      "UI/UX Designer",
      "Product Manager",
      "Marketing Specialist",
      "Data Scientist",
    ];
    const bios = [
      "Passionate about building scalable web applications.",
      "Loves creating intuitive and beautiful user interfaces.",
      "Drives product vision from concept to launch.",
      "Expert in digital growth strategies.",
      "Turning complex data into actionable insights.",
    ];
    const hash = name.length % roles.length; // Hash sederhana untuk peran dan bio
    return {
      role: roles[hash],
      bio: bios[hash],
    };
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading team members...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-64 text-red-600">
        <p>
          Error: {error?.message || "Something went wrong fetching team data."}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 p-4">
      <h1 className="text-5xl font-bold text-center mb-8">
        Meet Our Amazing Team
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Kami adalah tim profesional yang bersemangat, berdedikasi untuk
        memberikan hasil terbaik dan mendorong batasan inovasi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.map((member) => {
          const { role, bio } = getRoleAndBio(member.name.first);
          return (
            <Card
              key={member.login.uuid}
              className="text-center p-4 flex flex-col items-center"
            >
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={128} // Sesuaikan ukuran yang Anda inginkan
                height={128} // Sesuaikan ukuran yang Anda inginkan
                className="rounded-full object-cover mb-4 border-2 border-blue-400"
              />
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-xl font-semibold">
                  {member.name.first} {member.name.last}
                </CardTitle>
                <CardDescription className="text-blue-600">
                  {role}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-sm text-gray-600 flex-grow">
                <p>{bio}</p>
                <p className="mt-2 text-xs text-gray-500">
                  {member.location.city}, {member.location.country}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
