import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }) {

  return (
    <div className="admin-layout flex">
      <nav className="admin-nav w-64 bg-gray-800 text-white min-h-screen p-4">
        <ul>
          <li className="mb-4">
            <Link href="/admin/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/settings" className="hover:underline">
              Settings
            </Link>
          </li>
          {/* Add more admin links as needed */}
        </ul>
      </nav>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
