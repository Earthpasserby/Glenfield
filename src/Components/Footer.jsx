import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-green-600" />
              <span className="text-lg font-semibold text-gray-900">
                Glenfield
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              A simple marketplace connecting farmers directly to buyers. Start
              with grains and scale as you grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Marketplace</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Browse Products
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-600 hover:text-gray-900">
                  Start Selling
                </Link>
              </li>
              <li>
                <Link
                  to="/farmers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Find Farmers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Get updates</h3>
            <form className="mt-3 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="submit"
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-between border-t py-6 text-sm text-gray-600">
          <p>© {year} Glenfield. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-gray-900">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-gray-900">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
