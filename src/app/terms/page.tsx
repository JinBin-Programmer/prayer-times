import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Waktu Solat Malaysia",
  description: "Terms of Service for Waktu Solat Malaysia.",
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 space-y-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-1">Terms of Service</h1>
        <p className="text-sm text-indigo-400 mb-4">Last updated: 23 May 2025</p>
        <p className="text-sm text-indigo-200 leading-relaxed">
          By using Waktu Solat Malaysia, you agree to these terms.
        </p>
      </div>

      {[
        { title: "1. Informational Use Only", body: "Prayer times shown are calculated reference times for informational purposes. They are not official JAKIM-issued times. Always verify with your local mosque or the official JAKIM e-Solat app before making religious decisions." },
        { title: "2. Accuracy", body: "We strive to display accurate prayer times but cannot guarantee exactness at all times. Calculated times may differ slightly from officially announced mosque times due to rounding and calculation method differences." },
        { title: "3. Acceptable Use", body: "You may use this site for personal, non-commercial purposes. You may not scrape, copy, or redistribute data without permission. You may not use automated tools to excessively request data." },
        { title: "4. Advertising", body: "This site displays ads via Google AdSense. We are not responsible for third-party advertisement content." },
        { title: "5. Limitation of Liability", body: "To the maximum extent permitted by law, Waktu Solat Malaysia is not liable for any damages arising from use of this site or reliance on prayer times displayed." },
        { title: "6. Governing Law", body: "These terms are governed by the laws of Malaysia. Disputes are subject to Malaysian jurisdiction." },
        { title: "7. Contact", body: "Questions: jinbin@ioti.io" },
      ].map((s) => (
        <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-white mb-2">{s.title}</h2>
          <p className="text-sm text-indigo-200 leading-relaxed">{s.body}</p>
        </div>
      ))}

      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/" className="text-amber-400 hover:underline">← Prayer Times</Link>
        <span className="text-indigo-600">·</span>
        <Link href="/privacy-policy" className="text-amber-400 hover:underline">Privacy Policy</Link>
      </div>
    </main>
  );
}
