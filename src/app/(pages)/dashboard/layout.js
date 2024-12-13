import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const cookieStore = cookies();
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
    <div className="dashboard-layout">
      {/* You can add dashboard-wide layout elements here */}
      {children}
    </div>
  );
}
