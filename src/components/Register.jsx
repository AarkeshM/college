import React from "react";
import { Mail, MapPin } from "lucide-react";
import college from "../assets/logonew.jpg";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-4 md:px-20">
      <div className="grid md:grid-cols-4 gap-3 text-sm md:text-base">

      <div className="flex items-center space-x-4">
  <img
    src={college}
    alt="K.S.R College Logo"
    className="w-24 h-auto"
  />
  <div className="text-white">
    <h1 className="text-xl font-bold">K.S.R</h1>
    <p className="text-sm">COLLEGE OF ENGINEERING</p>
    <p className="text-sm text-orange-500">Autonomous | Tiruchengode</p>
  </div>
</div>

        <div>
          <h4 className="font-bold text-lg mb-2">Student Coordinators</h4>
          <ul className="space-y-1">
            <li>6379337205 - (Shamyuktha M)</li>
            <li>9344093349 - (Kavineshan K)</li>
          </ul>
        
          <div className="flex items-center gap-2 mt-2">
            <Mail className="w-4 h-4" />

            <a href="mailto:paradoxtech2k25@gmail.com" className="text-white hover:text-blue-400">paradoxtech2k25@gmail.com</a>
          
          </div>
        </div>

        <div>
        <h4 className="font-bold text-lg mb-2">Faculty Coordinators</h4>
          <ul className="space-y-1">
            <li>9787229110 - (Dr. S. Vadivel)</li>
            <li>9786952167 - (Ms. R. Keerthana)</li>
          </ul>
        </div>
     
        <div>
          <h4 className="font-bold text-lg mb-2">Address</h4>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1" />
            <p>
              K.S.R College of Engineering, <br />
              KSR Kalvi Nagar, <br />
              Tiruchengode – 637 215, <br />
              Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 text-sm">
        Design and Developed By{" "}
        <span className="text-blue-400 font-medium">
          Department of Computer Science and Enginnering 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
