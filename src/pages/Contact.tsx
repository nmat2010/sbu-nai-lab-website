
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will get back to you soon.",
    });
    // Reset form (in a real application)
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-sbu-red mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about the NAI Engineering Teaching Lab or want to schedule a visit? We're here to help. Fill out the form, and a member of our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" placeholder="How can we help you?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="mt-1 min-h-[150px]" />
                </div>
                
                <Button type="submit" className="bg-sbu-red hover:bg-sbu-darkred">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-sbu-red mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-sbu-red mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700">
                        Department of Electrical and Computer Engineering<br />
                        Stony Brook University<br />
                        Stony Brook, NY 11794-2350
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-sbu-red mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">631-632-8400</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-sbu-red mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">ece@stonybrook.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-sbu-red mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Lab Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Lab Location</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Map placeholder - In a production site, an actual Google Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
