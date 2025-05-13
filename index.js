
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Joshad Group Limited</h1>
        <p className="text-sm mt-1">Elegant. Visionary. Trusted.</p>
      </header>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p className="text-gray-700">We are a diversified group of companies based in Uganda, committed to improving lives through healthcare, media, and education. Founded by Shadrach Nyago and Joan Nayigaga, Joshad Group is driven by innovation, integrity, and community impact.</p>
      </section>

      <section className="bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Companies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-2xl">
            <h3 className="text-xl font-bold text-blue-700">LifeTouch Medical Centre</h3>
            <p className="text-gray-600 mt-2">A community-focused health centre offering affordable, quality care.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-2xl">
            <h3 className="text-xl font-bold text-purple-700">Flare Focus Media</h3>
            <p className="text-gray-600 mt-2">Creative media and branding services tailored for impact and inspiration.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-2xl">
            <h3 className="text-xl font-bold text-green-700">Happy Hearts Kindergarten</h3>
            <p className="text-gray-600 mt-2">A joyful start to education for children, focused on learning, safety, and growth.</p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">📍 Wakiso District, Uganda</p>
        <p className="text-gray-700">📞 +256 786 981378</p>
        <p className="text-gray-700">✉️ joshadgroup@email.com</p>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Joshad Group Limited. All rights reserved.</p>
      </footer>
    </main>
  );
}
