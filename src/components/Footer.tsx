import { FaGithub, FaLinkedin, FaDribbble, FaBehance, FaPinterest, FaInstagram, FaYoutube, FaGlobe, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FooterProps {
  mode: 'developer' | 'designer';
}

export const Footer = ({ mode }: FooterProps) => {
  const isDev = mode === 'developer';

  return (
    <footer className={`w-full px-6 py-10 mt-10 transition-all duration-500 ${isDev ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-800'}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Tagline */}
        <div className="text-center md:text-left">
          <h2 className={`text-2xl font-semibold font-mono ${isDev ? 'text-white' : 'text-pink-600'}`}>
            {isDev ? 'Crafting Code with Passion' : 'Designing Dreams into Reality'}
          </h2>
          <p className="text-sm mt-2 opacity-80">
            &copy; {new Date().getFullYear()} All rights reserved. By Shanuka Amalsha
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          {isDev ? (
            <>
              <a href="https://github.com/shanukaamalsha" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shanuka-amalsha/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/@infosphere_nexus" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61564203497701&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <FaFacebook />
              </a>
              <a href="https://infosphere-nexus.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaGlobe />
              </a>
            </>
          ) : (
            <>
              <a href="https://dribbble.com/opulent_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                <FaDribbble />
              </a>
              <a href="https://pin.it/xZ1ddiu9X" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
                <FaPinterest />
              </a>
              <a href="https://www.instagram.com/infospherenexus?igsh=MWV4M3hmY2FzenZ3bw==" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
                <FaInstagram />
              </a>
            </>
          )}
        </div>
      </motion.div>
    </footer>
  );
};
