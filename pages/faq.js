import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'Are meals included in the price?',
    answer: 'Food and drink costs are not included unless otherwise stated.  You pay directly for what you order.  This allows flexibility for different budgets and tastes.'
  },
  {
    question: 'Do you guide historical or cultural tours?',
    answer: 'Our focus is on food, cafés and F&B market insights.  For historical and cultural tours you should book a licensed guide.  We can recommend trusted partners if needed.'
  },
  {
    question: 'Is the experience suitable for vegetarians or vegans?',
    answer: 'Yes.  We can tailor restaurant and café selections to accommodate vegetarian, vegan, halal or allergy requirements.  Please note your dietary needs when booking.'
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 3–5 days in advance for general tours and two weeks for F&B professional tours.  Last-minute requests may be possible depending on availability.'
  },
  {
    question: 'Do you operate in other cities besides Seoul and Suwon?',
    answer: 'At this time our core experiences are in Seoul and Suwon.  Custom itineraries may include day trips to nearby areas.  Feel free to ask.'
  }
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | K-Food Concierge</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <details key={idx} className="bg-gray-100 rounded-md shadow-sm p-4">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}