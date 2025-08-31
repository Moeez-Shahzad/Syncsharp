import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg">
                <img src={logo} alt="Sync Sharp Logo" className="h-16" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                Sync Sharp
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Think sharp, Sync Sharp. Your trusted partner for complete IT
              development services, empowering startups across MENA & EU with
              cutting-edge technology solutions.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Services
            </h3>
            <div className="space-y-2">
              {[
                "Website Development",
                "Mobile App Development",
                "AI Integrations",
                "Cloud Solutions",
              ].map((service) => (
                <motion.p
                  key={service}
                  whileHover={{ x: 4 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {service}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ready to transform your business? Let's sync up and create
              something sharp together.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Sync Sharp. All rights reserved. Built
            with precision and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;