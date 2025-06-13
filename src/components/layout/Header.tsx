import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from '@mui/icons-material';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
  { name: 'Volunteers', href: '/volunteers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              className="h-28 w-auto"
              src="/images/logo.png"
              alt="IEP Ghana Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 hover:text-primary transition-colors ${location.pathname === item.href ? 'text-primary' : 'text-gray-900'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-x-4 lg:ml-8">
          <Link to="/donate" className="btn-primary bg-accent text-white hover:bg-orange-600 font-bold px-6 py-2 rounded-md shadow transition-colors">
            Donate
          </Link>
          <Link to="/partnership" className="btn-secondary bg-secondary text-white hover:bg-green-700 font-bold px-6 py-2 rounded-md shadow transition-colors">
            Partnership
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  className="h-20 w-auto"
                  src="/images/logo.png"
                  alt="IEP Ghana Logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <span className="h-6 w-6 text-2xl font-bold" aria-hidden="true">×</span>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link to="/donate" className="block w-full mt-4 btn-primary bg-accent text-white font-bold px-6 py-2 rounded-md shadow transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                    Donate
                  </Link>
                  <Link to="/partnership" className="block w-full mt-2 btn-secondary bg-secondary text-white font-bold px-6 py-2 rounded-md shadow transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                    Partnership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 