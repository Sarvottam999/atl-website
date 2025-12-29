import React  from 'react';
import { Lightbulb } from 'lucide-react';

 
// Remove onNavigate prop from interface
interface ATLJourneyWebsiteProps {}

const Footer: React.FC<ATLJourneyWebsiteProps> = () => {

  return (
      
  
      <section className="py-16 px-6 bg-gray-800 text-white top-paper-shape">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ATL Innovation</h3>
                  <p className="text-xs text-gray-400">Dream. Create. Innovate.</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Where every student is an inventor waiting to be discovered.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About the Lab</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Projects</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Achievements</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Get Involved</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Join a Workshop</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Visit the Lab</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Collaborate</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Me</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Connect</h4>
              <p className="text-sm text-gray-400 mb-4">
                Have questions? Want to collaborate? Let's talk innovation!
              </p>
              <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-all">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 ATL Innovation Lab • Empowering the Next Generation of Innovators
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Part of the Atal Innovation Mission • Government of India
            </p>
          </div>
        </div>
      </section>
   
  );
};

export default Footer;