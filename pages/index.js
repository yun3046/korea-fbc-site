import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>K-Food & Café Concierge</title>
        <meta name="description" content="Experience Korea through local food, cafés and bakeries. Private experiences hosted by an English-speaking Korean F&B operator." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="bg-white">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Experience Korea through local food, cafés & bakeries
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Private local experiences hosted by an English-speaking Korean F&B operator.
            </p>
            <div className="mt-8">
              <Link href="/book">
                <a className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
                  Book Your Experience
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}