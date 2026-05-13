import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Shopora
            </h2>

            <p className="mt-5 max-w-sm text-slate-600">
              Your one-stop destination for premium products and modern shopping experience.
            </p>

            <div className="mt-6 flex items-center gap-4">
             <FaFacebookF className="cursor-pointer text-slate-600 hover:text-indigo-600" />

<FaInstagram className="cursor-pointer text-slate-600 hover:text-indigo-600" />

<FaTwitter className="cursor-pointer text-slate-600 hover:text-indigo-600" />

<FaYoutube className="cursor-pointer text-slate-600 hover:text-indigo-600" />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Shop
              </Link>

              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Categories
              </Link>

              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Deals
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Support
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Contact
              </Link>

              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Shipping
              </Link>

              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Returns
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                About
              </Link>

              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Privacy
              </Link>

              <Link href="/" className="text-slate-600 hover:text-indigo-600">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-500">
          © 2026 Shopora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}