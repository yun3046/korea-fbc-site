export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} K-Food & Café Concierge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}