'use client';
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 p-6 md:p-12 overflow-auto w-full">
        {/* Toggle button hanya tampil di mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-xl text-gray-700"
          >
            <FiMenu />
          </button>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-4">
          {/* Foto & Identitas */}
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/ady.jpg" // ganti dengan file kamu
              alt="Ady Candra"
              fill
              className="object-cover"
            />
          </div>

          {/* Nama, Role, Intro */}
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-2">Ady Candra</h1>
            <p className="text-lg text-blue-600 font-medium mb-2">
              Human Resources Specialist
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HR Analytics", "Talent Management", "HRIS", "People Development"].map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl">
              I help organizations grow by empowering their people through data-driven strategies and efficient HR systems. With 8+ years of experience, I’ve led projects in recruitment, people development, and organizational transformation.
            </p>
            <div className="flex gap-4 mb-6 text-sm text-blue-600">
              <a href="mailto:your.email@example.com" className="hover:underline">Email</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="/AdyCandra_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Download CV</a>
            </div>
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              View My Projects
            </a>
          </div>
        </section>

        {/* Project Teaser */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">HR Dashboard</h3>
              <p className="text-sm text-gray-600">Realtime dashboard for monitoring attendance, turnover, and site-based metrics across 7 mining locations.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Workforce Forecasting Tool</h3>
              <p className="text-sm text-gray-600">Predict workforce needs based on workload and site operational hours, reducing over-hiring and bottlenecks.</p>
            </div>
          </div>
        </section>

        {/* Testimoni singkat */}
        <section className="mt-16">
          <blockquote className="text-gray-300 italic border-l-4 pl-4 border-blue-500">
            “Ady has a additional ability beyond HR circumtances. He has programming skill to fulfill my needs of HR operationals.”
            <br /><span className="text-sm text-gray-500">— HR & GA Manager, PT Trimegah Bangun Persada</span>
          </blockquote>
        </section>

        {/* Footer CTA */}
        <footer className="mt-24 text-center text-sm text-gray-400">
          Ready to collaborate? <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">Let’s connect</a>
        </footer>
      </main>
    </div>
  );
}
