import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import SideNav from "@/components/ui/sidenav";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  let user;
  try {
    user = userCookie ? JSON.parse(userCookie.value) : null;
  } catch (error) {
    redirect("/");
  }

  // Protect all dashboard routes
  if (!user || user.role !== "admin") {
    redirect("/");
  }
  return (
    <ContentWrapper className="admin-layout h-[calc(100vh-120px)] flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </ContentWrapper>
  );
}
