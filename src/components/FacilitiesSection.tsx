
import React from 'react';
import { Printer, CircuitBoard, FlaskConical } from 'lucide-react';

const FacilityCard = ({ number, title, description, icon, details, imageUrl }: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
  imageUrl?: string;
}) => {
  return (
    <div className="facility-card">
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <div className="flex items-center mb-4">
          <span className="facility-number">{number}</span>
          <div className="ml-4 text-gray-600">{icon}</div>
        </div>
        <h3 className="facility-title mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-center md:text-left">{description}</p>
        {details && <p className="text-gray-500 text-sm">{details}</p>}
      </div>
      {imageUrl && (
        <div className="md:w-1/2">
          <img src={imageUrl} alt={title} className="rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Lab Facilities</h2>
        
        <div className="space-y-12">
          <FacilityCard 
            number={12}
            title="electrical test stations"
            description="State-of-the-art equipment for electrical engineering experiments and testing."
            icon={<FlaskConical size={28} />}
            details="including touchscreen oscilloscope, a 6½ digit multimeter, a triple power supply"
            imageUrl="/lovable-uploads/8858bd5e-696d-46a2-b19b-65c7c0629bd7.png"
          />
          
          <FacilityCard 
            number={8}
            title="3D Printers"
            description="Latest 3D printing technology for rapid prototyping and design projects."
            icon={<Printer size={28} />}
            details="3D printers allows students go from sketch to completed part in just a few hours."
            imageUrl="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png"
          />
          
          <FacilityCard 
            number={8}
            title="circuit assembly workstations"
            description="Fully equipped workstations for circuit design, assembly, and testing."
            icon={<CircuitBoard size={28} />}
            details="including a temperature controlled soldering iron and hand tools"
            imageUrl="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
