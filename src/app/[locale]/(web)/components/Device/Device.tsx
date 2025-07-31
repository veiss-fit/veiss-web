"use client"

import Image from "next/image"
import { useState } from "react"
import clsx from "clsx"
import image1 from "../../../../../../public/images/Image-1.jpg"
import cad2 from "../../../../../../public/images/cad2.jpg"
import image3 from "../../../../../../public/images/Image-3.jpg"

const TABS = ["Tracking", "Analysis", "Feedback"]

export default function MeetVeiss() {
  const [activeTab, setActiveTab] = useState("Tracking")

  return (
    <section className="bg-black text-white py-24 px-8 sm:px-16 md:px-32">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Meet Veiss</h2>
      <p className="text-primary text-lg sm:text-xl mb-12">
        Veiss transforms your training through precision tracking, intelligent analysis, and real-time feedback.
      </p>


      {/* Tabs */}
      <div className="flex space-x-6 mb-10 border-b border-gray-700">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "pb-2 text-lg font-medium",
              activeTab === tab
                ? "border-b-2 border-primary text-white"
                : "text-gray-400 hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Tracking" && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-xl">
                <Image
                src={cad2}
                alt="Veiss Sensor"
                width={330}
                height={220}
                className="mb-0 rounded-lg"
                />
            </div>
            <h3 className="text-xl text-white font-semibold mt-4 mb-2">Clip Veiss to your equipment</h3>
            <p className="text-sm text-gray-300">
                Attach the lightweight Veiss sensor to your gym equipment in seconds.
            </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-xl">
                <Image
                src={image1}
                alt="Device on weightstack"
                width={350}
                height={250}
                className="mb-0 rounded-lg"
                />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Fully automated tracking</h3>
            <p className="text-sm text-gray-300">
                Exercise naturally and let Veiss transform motion into smart metrics.
            </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-xl">
                <Image
                src={image3}
                alt="Veiss Coaching"
                width={350}
                height={250}
                className="mb-0 rounded-lg"
                />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Works with most equipment</h3>
            <p className="text-sm text-gray-300">
                Veiss can be attched to most weightstacks and bars.
            </p>
            </div>
        </div>
        )}

{activeTab === "Analysis" && (
  <div className="rounded-2xl shadow-lg">
    {/* Header Row */}
    <div className="grid grid-cols-3 bg-neutral-100 text-black font-semibold text-center rounded-t-xl overflow-hidden">
      <div className="py-5 text-lg tracking-wide">We Track</div>
      <div className="py-5 text-lg tracking-wide">We Learn</div>
      <div className="py-5 text-lg tracking-wide">Why It Matters</div>
    </div>

    {/* Content Row */}
    <div className="grid grid-cols-3 bg-black text-center text-white border-t border-primary rounded-b-xl py-8">
      {/* Column 1 */}
      <div className="flex flex-col gap-5 text-base">
        <span className="flex items-center justify-center gap-2">⚡ <span>Velocity</span></span>
        <span className="flex items-center justify-center gap-2">🔁 <span>Range of Motion</span></span>
        <span className="flex items-center justify-center gap-2">⏱ <span>Tempo</span></span>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-5 text-base">
        <span>Fatigue Trends</span>
        <span>Rep Consistency</span>
        <span>Form Quality</span>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-5 text-base text-white">
        <span>Optimize load</span>
        <span>Prevent injuries</span>
        <span>Build control</span>
      </div>
    </div>
  </div>
)}

{activeTab === "Feedback" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Video Placeholder */}
    <div className="rounded-2xl border-4 border-yellow-400 p-4">
      <div className="bg-black rounded-xl aspect-video w-full flex items-center justify-center text-yellow-300 text-lg">
        <video
            className="w-full h-auto rounded-2xl shadow-lg"
            controls
            muted
            loop
            autoPlay
            >
            <source src="/videos/Feedback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>

    {/* Feedback Cards */}
    <div className="space-y-6">
    <p>Get real-time tips through your Veiss app, personalized to your work-out style and goals.
        Here&apos;s an example of feedback you might receive after a workout:
    </p>
      <div className="bg-white text-black rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-extrabold mb-2">Analysis</h3>
        <p className="text-lg italic">3 reps with improper tempo detected</p>
      </div>
      <div className="bg-white text-black rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-extrabold mb-2">Feedback</h3>
        <p className="text-lg italic">Let&apos;s work on slowing down on the eccentric to 4s</p>
      </div>
    </div>
    </div>
)}
    </section>
  )
}
