import Sidebar from "../components/Sidebar"
// import Topbar from "../components/Topbar"
import OrdersTable from "../components/OrderTable"

export default function Orders() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col">

        {/* <Topbar /> */}

        <div className="p-8">

          {/* Page Title */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Orders</h1>
              <p className="text-gray-500">
                Manage and track your customer purchase history
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              + Create Order
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">

            <input
              type="text"
              placeholder="Search by Order ID, Customer Name..."
              className="border rounded-lg px-4 py-2 w-96"
            />

            <select className="border rounded-lg px-4 py-2">
              <option>All Statuses</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>

            <button className="border rounded-lg px-4 py-2">
              More Filters
            </button>

          </div>

          {/* Orders Table */}
          <OrdersTable />

        </div>
      </div>

    </div>
  )
}