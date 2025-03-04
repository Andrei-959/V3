import React, { useState } from "react";

const careers = [
  { name: "Mechanic", companies: ["Ford", "Toyota"], education: ["Auto Repair Certification"], universities: ["MIT", "UTI"], sections: ["Automobile Repair", "Diesel Mechanics"] },
  { name: "Nurse", companies: ["Mayo Clinic", "Johns Hopkins"], education: ["Biology, Chemistry"], universities: ["Harvard", "Johns Hopkins"], sections: ["Pediatrics", "Surgery", "ER"] },
  { name: "Judge", companies: ["Supreme Court", "State Courts"], education: ["Political Science, Law"], universities: ["Yale", "Harvard"], sections: ["Criminal", "Civil"] },
  { name: "Police Officer", companies: ["FBI", "Local PD"], education: ["Criminal Justice"], universities: ["Police Academy"], sections: ["Patrol", "Investigation"] },
  { name: "Astronaut", companies: ["NASA", "SpaceX"], education: ["Physics, Engineering"], universities: ["MIT", "Stanford"], sections: ["Spacewalks", "Research"] },
  { name: "Firefighter", companies: ["Fire Department"], education: ["Emergency Response"], universities: ["Fire Academy"], sections: ["Rescue", "Hazard Control"] },
  { name: "Architect", companies: ["Gensler", "Foster+Partners"], education: ["Math, Physics"], universities: ["Harvard", "Columbia"], sections: ["Residential", "Commercial"] },
  { name: "Programmer", companies: ["Google", "Microsoft"], education: ["Computer Science"], universities: ["MIT", "Stanford"], sections: ["Web Dev", "AI"] },
  { name: "Surgeon", companies: ["Cleveland Clinic", "Mayo Clinic"], education: ["Biology, Chemistry"], universities: ["Harvard", "Johns Hopkins"], sections: ["Neurosurgery", "Cardiology"] },
  { name: "Teacher", companies: ["Public Schools", "Private Schools"], education: ["Education, Psychology"], universities: ["Harvard", "Stanford"], sections: ["Elementary", "High School"] },
];

const App = () => {
  const [query, setQuery] = useState("");

  const filteredCareers = careers.filter(
    (career) => career.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-white to-red-500 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-center text-black mb-6">Career Compass</h1>
      <input
        type="text"
        placeholder="Search Careers..."
        className="p-3 border-2 border-blue-500 rounded-lg w-1/2 text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-6 w-3/4">
        {filteredCareers.length > 0 ? (
          filteredCareers.map((career, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg my-4">
              <h2 className="text-2xl font-bold text-blue-600">{career.name}</h2>
              <p><strong>Top Companies:</strong> {career.companies.join(", ")}</p>
              <p><strong>High School Classes:</strong> {career.education.join(", ")}</p>
              <p><strong>Best Universities:</strong> {career.universities.join(", ")}</p>
              <p><strong>Career Subsections:</strong> {career.sections.join(", ")}</p>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-700 mt-4">No careers found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
