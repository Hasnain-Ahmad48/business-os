import orders from "../data/orders"

export default function OrdersTable() {

  return (
    <div className="bg-white rounded-xl shadow">

      <table className="w-full text-left">

        <thead className="border-b text-gray-500 text-sm">
          <tr>
            <th className="p-4">ORDER ID</th>
            <th className="p-4">CUSTOMER</th>
            <th className="p-4">DATE</th>
            <th className="p-4">AMOUNT</th>
            <th className="p-4">STATUS</th>
            <th className="p-4">ACTIONS</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((order) => (
            <tr key={order.id} className="border-b">

              <td className="p-4">{order.id}</td>

              <td className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                  {order.initials}
                </div>
                {order.customer}
              </td>

              <td className="p-4">{order.date}</td>

              <td className="p-4">{order.amount}</td>

              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-sm
                  ${order.status === "Completed" && "bg-green-100 text-green-600"}
                  ${order.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                  ${order.status === "Cancelled" && "bg-red-100 text-red-600"}
                `}>
                  {order.status}
                </span>
              </td>

              <td className="p-4 text-blue-600 cursor-pointer">
                View
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}