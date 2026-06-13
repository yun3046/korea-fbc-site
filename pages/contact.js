import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | K-Food Concierge</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-4">
          For inquiries about our experiences or custom itineraries, please reach out by email or DM.  We aim to respond within 24 hours.
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Email: </strong>
            <a href="mailto:info@koreafoodconcierge.com" className="text-red-500 underline">info@koreafoodconcierge.com</a>
          </li>
          <li>
            <strong>Instagram: </strong>
            <a href="https://www.instagram.com/koreafoodconcierge" className="text-red-500 underline">@koreafoodconcierge</a>
          </li>
          <li>
            <strong>Location: </strong>
            Seoul / Suwon, Korea
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}