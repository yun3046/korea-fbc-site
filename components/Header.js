import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="text-xl font-semibold text-gray-800">K-Food Concierge</a>
          </Link>
          <nav className="space-x-4">
            <Link href="/experiences"><a className="text-gray-600 hover:text-gray-800">Experiences</a></Link>
            <Link href="/about"><a className="text-gray-600 hover:text-gray-800">About</a></Link>
            <Link href="/book"><a className="text-gray-600 hover:text-gray-800">Book</a></Link>
            <Link href="/faq"><a className="text-gray-600 hover:text-gray-800">FAQ</a></Link>
            <Link href="/contact"><a className="text-gray-600 hover:text-gray-800">Contact</a></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}