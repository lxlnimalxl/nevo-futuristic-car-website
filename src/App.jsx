import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFeatures from './components/AboutFeatures';
import WhyChoose from './components/WhyChoose';
import ServicesMobility from './components/ServicesMobility';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PreOrderModal from './components/modals/PreOrderModal';
import TestDriveModal from './components/modals/TestDriveModal';
import SpecSheetModal from './components/modals/SpecSheetModal';

export default function App() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040404] text-white selection:bg-[#FF8305] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenPreOrder={() => setIsPreOrderOpen(true)}
        onOpenTestDrive={() => setIsTestDriveOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenPreOrder={() => setIsPreOrderOpen(true)}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />

        <AboutFeatures
          onOpenPreOrder={() => setIsPreOrderOpen(true)}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />

        <WhyChoose />

        <ServicesMobility
          onOpenTestDrive={() => setIsTestDriveOpen(true)}
          onOpenPreOrder={() => setIsPreOrderOpen(true)}
        />

        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation & Test Drive Modals */}
      <PreOrderModal
        isOpen={isPreOrderOpen}
        onClose={() => setIsPreOrderOpen(false)}
      />

      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
      />

      <SpecSheetModal
        isOpen={isSpecSheetOpen}
        onClose={() => setIsSpecSheetOpen(false)}
      />
    </div>
  );
}
