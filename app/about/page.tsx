'use client';
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const skillCategories = [
  {
    title: "HR Technology",
    description: "Tools and platforms I use to enhance HR processes",
    skills: [
      { name: "HRIS", level: 4, info: "Managing employee data & HR processes" },
      { name: "HR Automation", level: 3, info: "Streamlining repetitive HR tasks" },
      { name: "Google Apps Script", level: 3, info: "Custom automation & workflow integration" },
    ],
  },
  {
    title: "Data & Analytics",
    description: "My expertise in data analysis and visualization",
    skills: [
      { name: "Power BI", level: 4, info: "Dashboarding & reporting" },
      { name: "SQL", level: 3, info: "Querying & database design" },
      { name: "Python", level: 2, info: "Data wrangling, automation" },
      { name: "Data Visualization", level: 4, info: "Charts, storytelling" },
      { name: "Data Storytelling", level: 3, info: "Presenting insights" },
    ],
  },
  {
    title: "People Strategy",
    description: "Strategic HR skills for workforce planning and development",
    skills: [
      { name: "HR Analytics", level: 4, info: "Turning HR data into insights" },
      { name: "Workforce Planning", level: 3, info: "Forecasting staffing needs" },
      { name: "People Development", level: 3, info: "Coaching & employee growth programs" },
      { name: "Organizational Design", level: 2, info: "Structuring teams & reporting lines" },
    ],
  },
  {
    title: "Business & Soft Skills",
    description: "Essential skills for effective communication and leadership",
    skills: [
      { name: "Public Speaking", level: 3, info: "Presenting ideas to diverse audiences" },
      { name: "Problem Solving", level: 4, info: "Breaking down complex challenges" },
      { name: "Business Strategy", level: 3, info: "Aligning HR with business goals" },
    ],
  },
];


const Autoplay = (delay = 5000) => (slider: KeenSliderInstance) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false

  const clear = () => clearTimeout(timeout)
  const next = () => {
    clear()
    if (mouseOver) return
    timeout = setTimeout(() => slider.next(), delay)
  }

  const onEnter = () => { mouseOver = true; clear() }
  const onLeave = () => { mouseOver = false; next() }

  slider.on("created", () => {
    slider.container.addEventListener("mouseenter", onEnter)
    slider.container.addEventListener("mouseleave", onLeave)
    next()
  })

  slider.on("dragStarted", clear)
  slider.on("animationEnded", next)
  slider.on("updated", next)

  slider.on("destroyed", () => {
    slider.container.removeEventListener("mouseenter", onEnter)
    slider.container.removeEventListener("mouseleave", onLeave)
    clear()
  })
}
export default function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
  {
    loop: true,
    mode: "snap",
    slides: { origin: "center", perView: 1, spacing: 16 },
  },
  [Autoplay(3000)] // autoplay 5s + pause on hover
)

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
                I&apos;m <strong>Ady Candra</strong>, an <strong>HR Technology & Data Development Specialist</strong> focused on blending HR insight, technology, and data analytic to support meaningful HR strategic transformation.

                With over 8 years of experience in recruitment, training, people development, and HR operations across mining sectors, I build practical, human-centered HR systems, technologies and tools.

                Currently, I&apos;m exploring the path of <strong>HR Data Science</strong> — developing machine learning models to help analyze, predict, and guide HR decisions accurately in real time.
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
                  <span className="font-small text-white">Berau</span>
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
          <div className="my-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Skills</h2>

            <div ref={sliderRef} className="keen-slider">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="keen-slider__slide rounded-xl bg-white p-4 shadow-md"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {/* Kiri: Judul + Deskripsi */}
                    <div className="flex flex-col justify-start">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.description}
                      </p>
                    </div>

                    {/* Kanan: Skills (satu per baris) */}
                    <div className="flex flex-wrap gap-2 items-start">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="relative group">
                          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full cursor-pointer">
                            {skill.name}
                          </span>

                          {/* Tooltip */}
                          <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block 
                                          bg-gray-800 text-white text-xs rounded-lg px-3 py-2 shadow-lg w-48 z-50">
                            <p className="font-semibold">{skill.name}</p>
                            <p className="text-gray-300 mb-1">{skill.info}</p>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < skill.level ? "text-yellow-400" : "text-gray-500"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.459a1 1 0 00-1.175 0l-3.385 2.459c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.046 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.287-3.967z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
