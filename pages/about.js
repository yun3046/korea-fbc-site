import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About | K-Food Concierge</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About the Host</h1>
        <p className="text-gray-600 mb-4">
          I’m an English‑speaking Korean F&B operator with more than a decade of experience in the food service and café industry in Korea, Canada and the United States.  Having run restaurants, cafés and bakeries across cultures, I understand both Korean dining etiquette and Western expectations.
        </p>
        <p className="text-gray-600 mb-4">
          My mission is to help visitors experience Korea beyond tourist traps.  Whether you’re a casual traveler looking for delicious local food or an F&B professional researching new concepts, I’ll guide you through Korea’s vibrant food and café scene, translate menus and business models, and provide insider insights you won’t find elsewhere.
        </p>
        <p className="text-gray-600">
          Fluent in Korean and English, I bridge cultures so you can enjoy Korea like a local.
        </p>
      </main>
      <Footer />
    </>
  );
}