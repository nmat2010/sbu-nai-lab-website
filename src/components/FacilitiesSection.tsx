
import React, { useEffect, useRef, useState } from 'react';
import { Printer, CircuitBoard, FlaskConical } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { cn } from "@/lib/utils";
import { Card, CardContent } from './ui/card';

const FacilityCard = ({ number, title, description, icon, details, imageUrl, imageFirst = false }: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
  imageUrl?: string;
  imageFirst?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const contentSection = (
    <div className="flex flex-col items-center md:items-start md:w-1/2">
      <div className="flex items-center mb-4 transition-transform duration-300 group-hover:translate-y-[-5px]">
        <span className="facility-number transition-all duration-300 group-hover:text-sbu-darkred group-hover:scale-110">{number}</span>
        <div className="ml-4 text-gray-600 transition-all duration-300 group-hover:text-sbu-red group-hover:rotate-[5deg]">{icon}</div>
      </div>
      <h3 className="facility-title mb-2 transition-all duration-300 group-hover:text-sbu-darkred">{title}</h3>
      <p className="text-gray-600 mb-4 text-center md:text-left">{description}</p>
      {details && <p className="text-gray-500 text-sm">{details}</p>}
    </div>
  );

  const imageSection = imageUrl && (
    <div className="md:w-1/2 h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md transition-all duration-500 group-hover:scale-105">
        <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="rounded-lg shadow-md object-contain w-full h-full transition-all duration-500 group-hover:brightness-110"
          />
        </AspectRatio>
      </div>
    </div>
  );

  return (
    <Card 
      ref={cardRef}
      className={cn(
        "facility-card group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-100",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        imageFirst ? "md:flex-row-reverse" : "",
      )}
    >
      <CardContent className={cn("p-6 flex flex-col md:flex-row items-center gap-6", imageFirst ? "md:flex-row-reverse" : "")}>
        {imageFirst ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </CardContent>
    </Card>
  );
};

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
            imageUrl="/lovable-uploads/7936e31f-b3d2-4b6f-ab06-9fa5530ee208.png"
            imageFirst={true}
          />
          
          <FacilityCard 
            number={8}
            title="circuit assembly workstations"
            description="Fully equipped workstations for circuit design, assembly, and testing."
            icon={<CircuitBoard size={28} />}
            details="including a temperature controlled soldering iron and hand tools"
            imageUrl="/lovable-uploads/8ff3eaf7-0cbd-4e79-a602-865b178af0fe.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
