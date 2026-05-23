import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Waktu Solat Malaysia",
  description:
    "About Waktu Solat Malaysia — a free tool showing accurate daily prayer times for all major cities in Malaysia.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 space-y-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-800 text-xl shadow-md">🕌</span>
          <div>
            <h1 className="text-2xl font-bold text-white">About Waktu Solat Malaysia</h1>
            <p className="text-sm text-indigo-300">Free daily prayer times · Updated every day</p>
          </div>
        </div>
        <p className="text-indigo-100 leading-relaxed mb-3">
          <strong>Waktu Solat Malaysia</strong> provides free, accurate daily prayer times for all major cities in Malaysia — including Kuala Lumpur, Selangor, Penang, Johor Bahru, Ipoh, Kuching, and more.
        </p>
        <p className="text-indigo-100 leading-relaxed">
          Prayer times are calculated using the Al Adhan API with the Muslim World League method (Method 3) — the same method referenced by JAKIM for Malaysian prayer schedules.
        </p>
      </div>

      {[
        { icon: "📡", title: "Data Source", body: "Prayer times are fetched from the Al Adhan API (aladhan.com), a trusted open-source Islamic prayer time service. Times are calculated based on astronomical data for each city's latitude and longitude, using Method 3 (Muslim World League)." },
        { icon: "🕐", title: "Prayer Times Explained", body: "The five fardhu prayers are: Subuh (Fajr), Zohor (Dhuhr), Asar (Asr), Maghrib, and Isyak (Isha). Syuruk marks sunrise and ends the Subuh window. Imsak is 10 minutes before Subuh and marks the start of the fasting period during Ramadan." },
        { icon: "📍", title: "Location Accuracy", body: "Prayer times are calculated per city, not per GPS coordinate. For highly precise times based on your exact location, use the official JAKIM e-Solat mobile app or your local mosque announcement." },
        { icon: "⚠️", title: "Disclaimer", body: "Times shown are calculated reference times and may differ slightly from officially announced times by your local mosque or JAKIM. Always verify with your local authority for official prayer times." },
      ].map((s) => (
        <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{s.icon}</span>
            <h2 className="font-bold text-white">{s.title}</h2>
          </div>
          <p className="text-sm text-indigo-200 leading-relaxed">{s.body}</p>
        </div>
      ))}

      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/" className="text-amber-400 hover:underline">← Prayer Times</Link>
        <span className="text-indigo-600">·</span>
        <Link href="/privacy-policy" className="text-amber-400 hover:underline">Privacy Policy</Link>
        <span className="text-indigo-600">·</span>
        <Link href="/terms" className="text-amber-400 hover:underline">Terms</Link>
      </div>
    </main>
  );
}
