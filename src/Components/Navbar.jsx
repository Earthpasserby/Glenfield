import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClasses = "px-3 py-2 text-sm font-medium transition-colors";
  const inactiveLinkClasses = "text-gray-600 hover:text-gray-900";
  const activeLinkClasses = "text-green-600";

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-green-600" />
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                Glenfield
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/farmers"
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              Farmers
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              About
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/signin"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              to="/sell"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Start Selling
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/farmers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                Farmers
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                About
              </NavLink>
              <div className="mt-2 flex items-center gap-2">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/sell"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Start Selling
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
