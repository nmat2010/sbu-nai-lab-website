
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Schedule a Session</h1>
          
          <div className="mb-12">
            <p className="text-xl text-gray-700 mb-6">
              The NAI Engineering Teaching Lab offers sessions for Stony Brook students, faculty, and visiting groups. Choose a date and time that works for you, and our staff will be ready to assist with your projects or educational needs.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> For group visits of more than 5 people, please contact us directly at ece@stonybrook.edu to make special arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <BookingSection />
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-sbu-red mb-6">Preparing for Your Visit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">What to Bring</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>SBU ID card</li>
                  <li>Project materials (if applicable)</li>
                  <li>USB drive for saving your work</li>
                  <li>Notebook and pen</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Safety Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Closed-toe shoes required</li>
                  <li>Safety glasses provided for certain activities</li>
                  <li>Follow all staff instructions</li>
                  <li>No food or drink in the lab area</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                <p className="text-gray-700">
                  Please notify us at least 24 hours in advance if you need to cancel or reschedule your session. This allows us to make the time slot available to other students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
