import { FaStore } from "react-icons/fa";
import { lusitana } from "@/components/ui/fonts";

export default function EvrzLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <FaStore className="h-12 w-12 rotate-[15deg]s mr-2 mb-2" />
      <p className="text-[44px]">Evrz</p>
    </div>
  );
}
