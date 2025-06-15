
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminLocations } from '@/components/admin/AdminLocations';
import { AdminTeams } from '@/components/admin/AdminTeams';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('Teams');

  const renderContent = () => {
    switch (activeSection) {
      case 'Teams':
        return <AdminTeams />;
      case 'Services':
        return <div className="p-6"><h1 className="text-3xl font-bold">Services</h1><p>Services management coming soon...</p></div>;
      case 'Locations':
        return <AdminLocations />;
      default:
        return <AdminTeams />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
