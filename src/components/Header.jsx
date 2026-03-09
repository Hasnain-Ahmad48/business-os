import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      <input
        placeholder="Search for data, reports or users..."
        className="w-100 h-10 px-4 border rounded-md outline-none"
      />

      <div className="flex items-center gap-6">

        <Bell size={20} />

        <div className="flex items-center gap-3">
          {/* <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full"
          /> */}

          <div>
            <p className="text-sm font-semibold">Alex Morgan</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>

      </div>

    </div>
  );
}