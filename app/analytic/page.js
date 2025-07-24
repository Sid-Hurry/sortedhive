import React from 'react';
import Link from 'next/link';

const AnalyticsPage = () => {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-12 font-gill bg-white min-h-screen select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Link Analytics</h1>
          <p className="text-gray-700 text-base sm:text-lg">
            This section will offer insights into your shortened links — including click counts, referrers, and geographical data.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
          <div className="p-5 sm:p-6 bg-gray-50 rounded-xl shadow-xl">
            <div className="text-xl sm:text-2xl font-semibold mb-2">Total Clicks</div>
            <div className="text-gray-600 text-lg sm:text-xl">1,245</div>
          </div>

          <div className="p-5 sm:p-6 bg-gray-50 rounded-xl shadow-xl">
            <div className="text-xl sm:text-2xl font-semibold mb-2">Top Referrer</div>
            <div className="text-gray-600 text-lg sm:text-xl">twitter.com</div>
          </div>

          <div className="p-5 sm:p-6 bg-gray-50 rounded-xl shadow-xl">
            <div className="text-xl sm:text-2xl font-semibold mb-2">Top Country</div>
            <div className="text-gray-600 text-lg sm:text-xl">India (64%)</div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mt-10">
          <div className="bg-gray-100 p-5 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Daily Click Trends</h3>
            <p className="text-gray-600 text-sm">A chart representation of clicks over the past 7 days (coming soon).</p>
          </div>
          <div className="bg-gray-100 p-5 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Top Devices</h3>
            <p className="text-gray-600 text-sm">See which devices your audience uses the most (coming soon).</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 italic text-sm">
            Note: This page is currently under development. You are viewing a static preview of the upcoming Analytics Dashboard.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-stone-700 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
