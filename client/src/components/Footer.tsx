import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12">
                <Logo />
              </div>
              <div className="text-xl font-bold font-display">
                CLOUDRAGE<br />
                <span className="text-sm font-normal">TECHNOLOGY</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Simplifying smart living through professional home automation solutions. 
              Secure, efficient, and effortless smart home systems for Ontario homeowners.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="glass rounded-lg px-4 py-2">
                <div className="text-xs font-semibold mb-1">Certified</div>
                <div className="text-xs text-gray-400">Home Automation</div>
              </div>
              <div className="glass rounded-lg px-4 py-2">
                <div className="text-xs font-semibold mb-1">Licensed</div>
                <div className="text-xs text-gray-400">Ontario, Canada</div>
              </div>
              <div className="glass rounded-lg px-4 py-2">
                <div className="text-xs font-semibold mb-1">Insured</div>
                <div className="text-xs text-gray-400">Fully Protected</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-cyan transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-cyan transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan" />
                <span className="text-gray-400">+1 (647) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan" />
                <span className="text-gray-400">hello@cloudrage.tech</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan" />
                <span className="text-gray-400">Greater Toronto Area, ON</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-cyan to-navy rounded-lg flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                  data-testid="social-twitter"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-sage to-orange rounded-lg flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                  data-testid="social-facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-orange to-cyan rounded-lg flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                  data-testid="social-linkedin"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Cloudrage Technology. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
