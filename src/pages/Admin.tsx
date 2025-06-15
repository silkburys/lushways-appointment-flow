
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminLocations } from '@/components/admin/AdminLocations';

const Admin = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <AdminLocations />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
