import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences | K-Food Concierge</title>
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Experiences</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700">Local Food & Café Experience</h2>
            <p className="mt-2 text-gray-600">
              A private experience designed for travelers who want to eat like locals.  We guide you through a local restaurant, help with ordering and explain Korean dining etiquette.  Then we visit a specialty café or bakery and introduce unique beverages and pastries.  Includes personalised recommendations for the rest of your trip.
            </p>
            <p className="mt-2 text-gray-600 italic">Best for first-time visitors, solo travelers and small groups.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700">Café & Bakery Market Tour for F&B Professionals</h2>
            <p className="mt-2 text-gray-600">
              A half-day tour tailored to café owners, bakery operators and F&B professionals.  We visit several trend-setting cafés and bakeries to observe store design, menu pricing, customer flow and business strategies.  You’ll gain insights into Korea’s innovative F&B scene to inspire your own business.
            </p>
            <p className="mt-2 text-gray-600 italic">Best for entrepreneurs, franchise teams and industry insiders.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700">Custom Itinerary Planning</h2>
            <p className="mt-2 text-gray-600">
              Not sure where to start?  Tell us your taste preferences, budget and schedule.  We’ll create a custom food & café itinerary and provide an optional guided experience.  Perfect for those who want a tailored adventure without the guesswork.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}