import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="pt-28 md:pt-56 text-white">
      <div className="space-y-3 mb-8">
        <p className="text-4xl md:text-5xl font-bold">ZILY-CLOUD</p>

        <p className="md:font-bold">
          At Paschaline's Consult, we understand the importance of communication
          and presentation <br /> in achieving your goals, which is why we are
          committed to delivering high-quality, <br />
          customized solutions that resonate with your audience and drive
          results.
        </p>
      </div>

      <div className="space-x-4 text-lg font-semibold">
        <Link to="/register" className="">
          <button className="bg-blue-500 w-36 px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </Link>

        <Link to="/login" className="w-10">
          <button className="bg-blue-500 w-36 px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
