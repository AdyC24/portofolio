'use client';
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { FiMenu } from "react-icons/fi";

export default function AboutPage() {
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
        <section className="w-full max-w-5xl mx-auto p-6 space-y-10">
          {/* About + Domisili */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* About Me */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-blue-700">About Me</h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                I&apos;m <strong>Ady Candra</strong>, an <strong>HR Technology & Data Development Specialist</strong> focused on blending human insight, systems thinking, and data to support meaningful HR transformation.

                With over 8 years of experience in recruitment, training, people development, and HR operations across mining and industrial sectors, I build practical, human-centered HR systems and tools.

                Currently, I&apos;m exploring the path of HR Data Science — developing machine learning models to help analyze, predict, and guide HR decisions in real time.
              </p>
              <p className="text-gray-200 text-sm leading-relaxed mt-4">
                I bring a unique combination of HR capabilities:
              </p>
              <ul className="text-gray-200 text-sm leading-relaxed mt-2 space-y-1 list-none">
                <li>
                  – <strong>HR Generalist</strong>, grounded in hands-on field experience and HR operations.
                </li>
                <li>
                  – <strong>HR Technologist</strong>, creating custom tools and automations to support everyday HR work.
                </li>
                <li>
                  – <strong>HR Futurist</strong>, committed to advancing data-driven HR systems for better decision-making.
                </li>
              </ul>
            </div>

            {/* Domisili */}
            <div className="bg-blue-950 text-white p-4 rounded-xl shadow-md mt-8">
              <h3 className="font-semibold text-white text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 20s6-5.686 6-10A6 6 0 0 0 4 10c0 4.314 6 10 6 10Z" />
                  <circle cx="10" cy="10" r="2.5" fill="#fff" />
                </svg>
                Berau, Indonesia
              </h3>
              <ul className="text-gray-200 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-28 text-gray-400">Regency</span>
                  <span className="font-medium text-white">Berau</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 text-gray-400">Province</span>
                  <span className="font-medium text-white">East Kalimantan</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 text-gray-400">Country</span>
                  <span className="font-medium text-white">Indonesia, ID</span>
                </li>
                <li className="flex justify-center mt-4">
                  <a
                    href="https://www.google.com/maps/place/Berau,+Kalimantan+Timur,+Indonesia/@-2.6404,117.5009,10z/data=!3m1!4b1!4m6!3m5!1s0x2dfb8f7c8d8c8c8f:0x2e8e8e8e8e8e8e8e!8m2!3d-2.6404!4d117.5009!16zL20vMDNnZzY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-center"
                  >
                    See on Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto p-6 space-y-10">
          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Skills</h2>
            <div className="space-y-4">

              {/* HR Technology */}
              <div>
                <h3 className="text-md font-semibold text-gray-700 mb-1">HR Technology</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HRIS", "HR Automation", "Retool", "Notion", "Zapier", "Google Apps Script"
                  ].map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data & Analytics */}
              <div>
                <h3 className="text-md font-semibold text-gray-700 mb-1">Data & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HR Analytics", "Workforce Planning", "Power BI", "SQL", "Python", "Data Visualization"
                  ].map(skill => (
                    <span key={skill} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web & App Development */}
              <div>
                <h3 className="text-md font-semibold text-gray-700 mb-1">Web & App Development</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js", "React", "Node.js", "MongoDB", "REST API"
                  ].map(skill => (
                    <span key={skill} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* HR Domain Knowledge */}
              <div>
                <h3 className="text-md font-semibold text-gray-700 mb-1">HR Domain Knowledge</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "People Development", "Organizational Design", "Change Management"
                  ].map(skill => (
                    <span key={skill} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto p-6 space-y-10">
          {/* Career */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Career</h2>
            <div className="space-y-5 text-sm text-gray-200">
              <div>
                <p className="font-semibold text-white">PT. Gane Permai Sentosa (Harita Nickel Group) – Nov 2023 to current</p>
                <p>HR Operation Officer</p>
              </div>
              <div>
                <p className="font-semibold text-white">PT. Bukit Makmur Mandiri Utama – Sep 2023 to Nov 2023</p>
                <p>Foreman - HR Services</p>
              </div>
              <div>
                <p className="font-semibold text-white">PT. Bukit Makmur Mandiri Utama – Dec 2017 to Sep 2023</p>
                <p>Admin - HR Services</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Education</h2>
            <p className="text-sm text-gray-200">
              Universitas Muhammadiyah Malang – B.Ed. in English Education (Graduated 2016)
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
