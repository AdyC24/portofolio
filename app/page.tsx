'use client';
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-6 md:p-8 overflow-auto w-full">
        {/* Toggle button hanya tampil di mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-xl text-gray-700"
          >
            <FiMenu />
          </button>
        </div>

        {/* Konten utama */}
        <h1 className="text-3xl font-bold mb-4">Welcome to my portofolio</h1>
      </main>
    </div>
  );
}