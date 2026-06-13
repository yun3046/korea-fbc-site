import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Book() {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    nationality: '',
    startDate: '',
    endDate: '',
    city: '',
    guests: 1,
    experienceType: '',
    isFnbPro: false,
    dietary: '',
    spice: '',
    interests: [],
    budget: '',
    accessibility: '',
    notes: ''
  };
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'interests') {
      setForm((prev) => {
        const values = new Set(prev.interests);
        if (checked) {
          values.add(value);
        } else {
          values.delete(value);
        }
        return { ...prev, interests: Array.from(values) };
      });
    } else if (type === 'checkbox' && name === 'isFnbPro') {
      setForm({ ...form, isFnbPro: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Booking error', error);
    }
  }

  return (
    <>
      <Head>
        <title>Book an Experience | K-Food Concierge</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking Inquiry</h1>
        {submitted ? (
          <div className="bg-green-100 border border-green-200 p-4 rounded">
            <p className="text-green-700">Thank you!  Your booking inquiry has been received.  We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email*</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone/WhatsApp</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nationality</label>
                <input type="text" name="nationality" value={form.nationality} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date*</label>
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date*</label>
                <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred City/Region*</label>
              <select name="city" value={form.city} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Select</option>
                <option value="Seoul">Seoul</option>
                <option value="Suwon">Suwon</option>
                <option value="Other">Other (please specify in notes)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Number of Guests*</label>
              <input type="number" name="guests" min="1" value={form.guests} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience Type*</label>
              <select name="experienceType" value={form.experienceType} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Select</option>
                <option value="Local Food & Café Experience">Local Food & Café Experience</option>
                <option value="Café & Bakery Market Tour">Café & Bakery Market Tour for F&B Professionals</option>
                <option value="Custom">Custom Itinerary</option>
              </select>
            </div>
            <div>
              <label className="inline-flex items-center mt-2">
                <input type="checkbox" name="isFnbPro" checked={form.isFnbPro} onChange={handleChange} className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-700">I am an F&B professional/business owner</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Dietary Restrictions/Preferences</label>
              <input type="text" name="dietary" value={form.dietary} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Vegetarian, vegan, halal, allergies, etc." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Spice Tolerance</label>
              <select name="spice" value={form.spice} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Select</option>
                <option value="Not spicy">Not spicy</option>
                <option value="Mild">Mild</option>
                <option value="Medium">Medium</option>
                <option value="Very spicy">Very spicy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Interests</label>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Street food','Traditional restaurants','Modern restaurants','Café/bakery','Markets & stalls','F&B business insights'].map((option) => (
                  <label key={option} className="inline-flex items-center text-sm">
                    <input type="checkbox" name="interests" value={option} checked={form.interests.includes(option)} onChange={handleChange} className="form-checkbox" />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Budget per Person (USD)</label>
              <select name="budget" value={form.budget} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Select</option>
                <option value="Under $50">Under $50</option>
                <option value="$50–$100">$50–$100</option>
                <option value="$100–$200">$100–$200</option>
                <option value="Over $200">Over $200</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobility/Accessibility Needs</label>
              <input type="text" name="accessibility" value={form.accessibility} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Optional" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows="4" placeholder="Tell us anything else we should know" />
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Submit Inquiry</button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}