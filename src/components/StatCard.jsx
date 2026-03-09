export default function StatCard({ title, value, icon, change }) {
  return (
    <div className="bg-white p-5 rounded-lg border shadow-sm">

      <div className="flex justify-between items-center mb-4">
        <div className="bg-blue-100 p-2 rounded">{icon}</div>
        <span className="text-green-600 text-sm">{change}</span>
      </div>

      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-2xl font-semibold mt-1">{value}</h2>

    </div>
  );
}