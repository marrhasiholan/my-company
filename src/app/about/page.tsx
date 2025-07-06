export default function AboutUsPage() {
  return (
    <div className="container mx-auto py-12 p-4">
      <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>

      {/* Company History */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Journey</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Didirikan pada tahun [Tahun Pendirian] oleh [Nama Pendiri], [Nama
          Perusahaan Anda] bermula dari visi sederhana untuk [visi awal]. Dari
          awal yang sederhana di sebuah garasi, kami telah tumbuh secara
          eksponensial, mencapai tonggak penting seperti [milestone 1],
          [milestone 2], dan [milestone 3]. Setiap langkah di jalan ini dibentuk
          oleh komitmen kami terhadap inovasi, kualitas, dan kepuasan pelanggan.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Hari ini, kami bangga melayani klien di seluruh dunia, mendorong
          batasan teknologi, dan memberikan solusi yang berdampak nyata. Kami
          percaya bahwa sejarah kami adalah fondasi untuk masa depan yang lebih
          cerah, di mana kami terus berinovasi dan berkembang bersama komunitas
          kami.
        </p>
      </section>

      {/* Team (Brief Intro, more on /teams page) */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Meet Our Leaders
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Tim inti kami terdiri dari para ahli yang bersemangat dan berdedikasi.
          Kami menggabungkan pengalaman bertahun-tahun dengan perspektif segar
          untuk mendorong inovasi dan memberikan hasil yang luar biasa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh: Anda bisa menampilkan beberapa anggota tim inti di sini */}
          <div className="text-center">
            <img
              src="/team-member-1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-blue-600">CEO & Founder</p>
            <p className="text-gray-600 text-sm mt-2">
              Berpengalaman lebih dari 20 tahun di industri teknologi.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-blue-600">Chief Technology Officer</p>
            <p className="text-gray-600 text-sm mt-2">
              Pakar dalam arsitektur perangkat lunak dan AI.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Our Culture & Values
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Di [Nama Perusahaan Anda], kami percaya bahwa lingkungan kerja yang
          positif dan kolaboratif adalah kunci kesuksesan. Kami mempromosikan
          budaya di mana setiap suara didengar, ide dihargai, dan pembelajaran
          berkelanjutan didorong. Nilai-nilai inti kami meliputi:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
          <li>**Inovasi:** Mendorong pemikiran kreatif dan solusi baru.</li>
          <li>**Integritas:** Bertindak dengan kejujuran dan etika.</li>
          <li>**Kolaborasi:** Bekerja sama untuk mencapai tujuan bersama.</li>
          <li>
            **Keunggulan:** Berkomitmen pada kualitas dan kinerja terbaik.
          </li>
          <li>
            **Customer-Centric:** Memprioritaskan kebutuhan dan kepuasan klien.
          </li>
        </ul>
      </section>
    </div>
  );
}
