import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Membangun situs web yang disesuaikan dari awal, mulai dari landing page hingga aplikasi web kompleks, menggunakan teknologi front-end dan back-end terbaru.",
      pricing: "Mulai dari Rp15.000.000",
      testimonials: [
        {
          quote:
            "Website baru kami sangat responsif dan mudah digunakan. Tim ini luar biasa!",
          client: "Client A",
        },
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Merancang dan mengembangkan aplikasi seluler asli (iOS & Android) serta lintas platform dengan fokus pada pengalaman pengguna yang intuitif dan performa tinggi.",
      pricing: "Mulai dari Rp25.000.000",
      testimonials: [
        {
          quote:
            "Aplikasi seluler yang mereka buat melampaui ekspektasi kami, mendorong keterlibatan pengguna yang luar biasa.",
          client: "Client B",
        },
      ],
    },
    {
      title: "Cloud Solutions & DevOps",
      description:
        "Membantu bisnis migrasi ke cloud, mengoptimalkan infrastruktur, dan menerapkan praktik DevOps untuk penyebaran yang lebih cepat dan andal.",
      pricing: "Berdasarkan Proyek",
      testimonials: [
        {
          quote:
            "Solusi cloud mereka meningkatkan skalabilitas dan efisiensi operasional kami secara signifikan.",
          client: "Client C",
        },
      ],
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Strategi pemasaran digital komprehensif, termasuk SEO, SEM, pemasaran konten, dan media sosial, untuk meningkatkan visibilitas dan pertumbuhan bisnis Anda.",
      pricing: "Mulai dari Rp5.000.000/bulan",
      testimonials: [
        {
          quote:
            "Kampanye SEO mereka menempatkan kami di puncak hasil pencarian. Sangat direkomendasikan!",
          client: "Client D",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12 p-4">
      <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-blue-600">
                {service.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {service.pricing && (
                <p className="text-xl font-bold text-green-600 mt-4 mb-2">
                  {service.pricing}
                </p>
              )}
              <h3 className="text-xl font-semibold mt-6 mb-3">
                Client Testimonials:
              </h3>
              {service.testimonials.map((testimonial, tIndex) => (
                <div
                  key={tIndex}
                  className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-3 last:mb-0"
                >
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                  <p className="font-medium text-right mt-2">
                    - {testimonial.client}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
