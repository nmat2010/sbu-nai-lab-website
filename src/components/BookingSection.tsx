
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from 'lucide-react';

const timeSlots = [
  "9:30am",
  "11:30am",
  "1:30pm",
  "3:30pm",
  "5:30pm",
  "7:30pm"
];

const BookingSection = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    sbuId: "",
    sbuEmail: "",
    isStudent: "Yes"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      isStudent: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time slot.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.fullName || !formData.sbuId || !formData.sbuEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would submit to an API
    toast({
      title: "Booking Successful",
      description: `Your session has been booked for ${selectedDate} at ${selectedTime}.`,
    });
    
    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setFormData({
      fullName: "",
      sbuId: "",
      sbuEmail: "",
      isStudent: "Yes"
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-sbu-red mb-12">BOOK YOUR SESSION TODAY!</h2>
        
        <div className="bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Select a Date & Time</h3>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="text-sbu-red mr-2" />
                  <Label htmlFor="date">Date</Label>
                </div>
                <div className="relative">
                  <Input 
                    id="date"
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <Label className="block mb-4">Available Time Slots</Label>
                <div className="grid grid-cols-2 gap-4">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className={selectedTime === time ? "bg-sbu-red hover:bg-sbu-darkred" : "border-sbu-red text-sbu-red hover:bg-sbu-red hover:text-white"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Your Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Thu Nguyen" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="sbuId">SBU ID</Label>
                    <Input 
                      id="sbuId" 
                      name="sbuId"
                      value={formData.sbuId}
                      onChange={handleInputChange}
                      placeholder="123456789" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="sbuEmail">SBU Email</Label>
                    <Input 
                      id="sbuEmail" 
                      name="sbuEmail"
                      value={formData.sbuEmail}
                      onChange={handleInputChange}
                      placeholder="thu.nguyen@stonybrook.edu" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>SBU Student</Label>
                    <RadioGroup 
                      defaultValue="Yes" 
                      value={formData.isStudent}
                      onValueChange={handleRadioChange}
                      className="flex space-x-8 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="yes" className="text-sbu-red" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="no" className="text-sbu-red" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sbu-red hover:bg-sbu-darkred mt-4"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
