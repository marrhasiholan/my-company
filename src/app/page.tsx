import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4">
      {" "}
      {/* min-h untuk isi konten */}
      {/* hero section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center text-white flex flex-col justify-center items-center text-center p-8"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Innovate. Create. Inspire.
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Kami adalah perusahaan terkemuka yang berdedikasi untuk memberikan
            solusi inovatif dan layanan berkualitas tinggi kepada klien kami di
            seluruh dunia.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
      {/* company overview */}
      <section className="container mx-auto my-16 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">
          About Our Company
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Didirikan pada tahun [Tahun Pendirian], [Nama Perusahaan Anda] telah
          tumbuh menjadi pemimpin di industri [Industri Anda]. Kami bangga
          dengan tim ahli kami yang berdedikasi untuk memecahkan masalah
          kompleks dan menciptakan nilai nyata bagi bisnis. Budaya kami
          didasarkan pada inovasi, kolaborasi, dan komitmen terhadap keunggulan.
        </p>
      </section>
      {/* services */}
      <section className="container mx-auto my-16 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Membangun situs web modern dan responsif menggunakan teknologi
                terbaru.
              </p>
              <Button className="mt-4" variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mobile App Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Menciptakan aplikasi seluler intuitif untuk iOS dan Android.
              </p>
              <Button className="mt-4" variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Digital Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Meningkatkan visibilitas online dan menjangkau target audiens
                Anda.
              </p>
              <Button className="mt-4" variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* testimonials */}
      <section className="w-full bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <p className="italic text-gray-700">
                "Layanan luar biasa! Tim [Nama Perusahaan Anda] sangat
                profesional dan responsif. Mereka melampaui ekspektasi kami."
              </p>
              <p className="font-semibold mt-4">- Jane Doe, CEO of ABC Corp</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="italic text-gray-700">
                "Produk mereka benar-benar mengubah cara kami berbisnis. Sangat
                direkomendasikan!"
              </p>
              <p className="font-semibold mt-4">
                - John Smith, Founder of XYZ Solutions
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="italic text-gray-700">
                "Kolaborasi yang hebat. Mereka memahami kebutuhan kami dan
                memberikan hasil tepat waktu dan sesuai anggaran."
              </p>
              <p className="font-semibold mt-4">
                - Emily White, Marketing Director
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
