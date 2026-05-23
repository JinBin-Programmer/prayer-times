import type { Metadata } from "next";
import { getPrayerData } from "@/lib/prayer";
import PrayerDisplay from "@/components/PrayerDisplay";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";

export const revalidate = 43200; // 12 hours

export const metadata: Metadata = {
  title: "Waktu Solat Malaysia — Prayer Times Today",
  description:
    "Today's prayer times (waktu solat) for Kuala Lumpur and all major cities in Malaysia. Subuh, Syuruk, Zohor, Asar, Maghrib, Isyak — accurate daily schedule.",
};

export default async function HomePage() {
  const data = await getPrayerData("Kuala Lumpur");

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {/* Hero */}
      <div className="animate-in text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-white">
          🕌 Waktu Solat Malaysia
        </h1>
        <p className="text-indigo-300 text-sm">
          Daily prayer times for Malaysia · Accurate & updated daily
        </p>
      </div>

      {/* Ad */}
      <AdBanner slot="4444444444" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

      {/* Main prayer display with city selector */}
      <PrayerDisplay initial={data} />

      {/* Ad */}
      <AdBanner slot="5555555555" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

      {/* Info cards */}
      <div className="grid sm:grid-cols-2 gap-4 animate-in delay-3">
        {[
          {
            icon: "📿",
            title: "5 Fardhu Prayers",
            body: "The five obligatory daily prayers in Islam are Fajr (Subuh), Dhuhr (Zohor), Asr (Asar), Maghrib, and Isha (Isyak). Syuruk marks sunrise — it is not a prayer but marks the end of the Fajr prayer window.",
          },
          {
            icon: "🕐",
            title: "Prayer Method",
            body: "Prayer times are calculated using the Muslim World League method (Method 3) which is widely used in Malaysia and adopted as a reference by JAKIM. Always verify against the official JAKIM e-Solat app for your exact location.",
          },
          {
            icon: "🗓",
            title: "Imsak",
            body: "Imsak marks the beginning of the fasting period during Ramadan — typically 10 minutes before Subuh. Outside Ramadan it serves as a reminder that Subuh is approaching.",
          },
          {
            icon: "📍",
            title: "Location Accuracy",
            body: "Prayer times vary by city and latitude. Select your city from the dropdown above for accurate local times. For precise times, consult your local mosque or the JAKIM e-Solat app.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/5 border border-white/10 rounded-2xl shadow-sm p-5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <h2 className="font-bold text-white text-sm">{item.title}</h2>
            </div>
            <p className="text-xs text-indigo-200 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Bottom links */}
      <div className="flex flex-wrap justify-center gap-3 text-sm pb-4 animate-in delay-4">
        <Link href="/about" className="text-amber-400 hover:underline">About</Link>
        <span className="text-indigo-600">·</span>
        <Link href="/privacy-policy" className="text-amber-400 hover:underline">Privacy Policy</Link>
        <span className="text-indigo-600">·</span>
        <Link href="/terms" className="text-amber-400 hover:underline">Terms</Link>
      </div>
    </div>
  );
}
