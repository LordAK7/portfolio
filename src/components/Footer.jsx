import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub size={18} />, href: '#', label: 'GitHub' },
    { icon: <FiTwitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <FiLinkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, href: '#', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.05]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              AdiVirtus AI
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Building the future of AI technology to empower businesses and individuals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Stay updated with our latest news and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/[0.05] border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} AdiVirtus AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-xs transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-xs transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 