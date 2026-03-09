import {BarChart, FileText, LayoutDashboard, Settings, ShoppingCart, User} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div>
        <div className="p-6 flex items-center gap-3 border-b border-gray-700">
          <div className="bg-blue-600 p-2 rounded">
            <LayoutDashboard size={18} />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Business OS</h1>
            <p className="text-xs text-shadow-gray-400">Enterprise Manager</p>
          </div>
        </div>
        <nav className="mt-6 flex flex-col gap-2 px-4">
            <a href="" className="flex items-center gap-3 p-3 bg-blue-600 rounded-md">
                <LayoutDashboard size={18}/>Dashboard
            </a>
            <a href="" className="flex items-center gap-3 p-3 bg-blue-600 rounded-md">
                <ShoppingCart size={18}/>Orders
            </a>
            <a href="" className="flex items-center gap-3 p-3 bg-blue-600 rounded-md">
                <FileText size={18}/>Invoices
            </a>
            <a href="" className="flex items-center gap-3 p-3 bg-blue-600 rounded-md">
                <User size={18}/>Customers
            </a>
            <a href="" className="flex items-center gap-3 p-3 bg-blue-600 rounded-md">
                <BarChart size={18}/>Analytics
            </a>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-700">
        <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md">
            <Settings size={18}/>Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
