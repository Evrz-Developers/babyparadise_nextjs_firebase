import { useSession } from "next-auth/react";

export default function UserLayout({ children }) {
  const { data: session } = useSession();

  return (
    <div className="user-layout">
      {/* You can now access session data here */}
      {children}
    </div>
  );
}
