import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { DollarSign, ShoppingCart, Users, FileClock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", revenue: 200 },
  { day: "Tue", revenue: 300 },
  { day: "Wed", revenue: 800 },
  { day: "Thu", revenue: 900 },
  { day: "Fri", revenue: 850 },
  { day: "Sat", revenue: 1100 },
  { day: "Sun", revenue: 1200 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>

      <div className="grid grid-cols-4 gap-6 mb-6">

        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={<DollarSign size={18} />}
          change="+12.5%"
        />

        <StatCard
          title="Active Orders"
          value="12"
          icon={<ShoppingCart size={18} />}
          change="+3.2%"
        />

        <StatCard
          title="New Customers"
          value="8"
          icon={<Users size={18} />}
          change="-2.1%"
        />

        <StatCard
          title="Pending Invoices"
          value="5"
          icon={<FileClock size={18} />}
          change="+4.5%"
        />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-white p-6 rounded-lg border shadow-sm">

          <h3 className="font-semibold mb-4">Revenue Trend</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563EB"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">

          <h3 className="font-semibold mb-4">Recent Orders</h3>

          <ul className="space-y-3 text-sm">

            <li className="flex justify-between">
              <span>#ORD-3201</span>
              <span className="text-green-600">Delivered</span>
            </li>

            <li className="flex justify-between">
              <span>#ORD-3202</span>
              <span className="text-blue-600">Processing</span>
            </li>

            <li className="flex justify-between">
              <span>#ORD-3203</span>
              <span className="text-yellow-600">Pending</span>
            </li>

            <li className="flex justify-between">
              <span>#ORD-3204</span>
              <span className="text-green-600">Delivered</span>
            </li>

            <li className="flex justify-between">
              <span>#ORD-3205</span>
              <span className="text-red-600">Cancelled</span>
            </li>

          </ul>

        </div>

      </div>

    </DashboardLayout>
  );
}