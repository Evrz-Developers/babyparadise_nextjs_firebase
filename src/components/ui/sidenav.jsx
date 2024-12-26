import Link from "next/link";
import EvrzLogo from "@/components/ui/evrz-logo";
import { Button } from "@nextui-org/button";
// import { PowerIcon } from "@heroicons/react/24/outline";
// import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex h-full rounded-md flex-col px-3 py-4 bg-gray-50">
      <ul className="space-y-2">
        <li>
          <Button
            variant="flat"
            as={Link}
            href="/admin/dashboard"
            className="w-full h-12"
          >
            Dashboard
          </Button>
        </li>
        <li>
          <Button
            variant="flat"
            as={Link}
            href="/admin/settings"
            className="w-full h-12"
          >
            Settings
          </Button>
        </li>
        {/* Add more admin links as needed */}
      </ul>
    </div>
  );
}
