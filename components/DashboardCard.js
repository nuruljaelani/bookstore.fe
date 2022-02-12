import { AiOutlineBook, AiOutlineMoneyCollect, AiOutlineUser, AiOutlineUserSwitch } from "react-icons/ai";

export default function DashboardCard() {
    return (
        <section className="flex container px-10 my-24 space-x-8">
            <div className="rounded-2xl basis-1/4 shadow-lg bg-gradient-to-r from-blue-300 to-purple-300 flex flex-col p-4 space-y-2">
                <div className="flex items-center space-x-2">
                    <AiOutlineBook className="text-4xl text-blue-600" />
                    <p className="font-semibold text-teal-800 text-xl">Total Products</p>
                </div>
                <p className="text-3xl font-semibold text-emerald-700">220</p>
            </div>
            <div className="rounded-2xl basis-1/4 shadow-lg bg-gradient-to-r from-purple-300 to-emerald-300 flex flex-col p-4 space-y-2">
                <div className="flex items-center space-x-2">
                    <AiOutlineUser className="text-4xl text-blue-600" />
                    <p className="font-semibold text-teal-800 text-xl">Total Users</p>
                </div>
                <p className="text-3xl font-semibold text-emerald-700">220</p>
            </div>
            <div className="rounded-2xl basis-1/4 shadow-lg bg-gradient-to-r from-emerald-300 to-yellow-300 flex flex-col p-4 space-y-2">
                <div className="flex items-center space-x-2">
                    <AiOutlineUserSwitch className="text-4xl text-blue-600" />
                    <p className="font-semibold text-teal-800 text-xl">Total Visitor</p>
                </div>
                <p className="text-3xl font-semibold text-emerald-700">400</p>
            </div>
            <div className="rounded-2xl basis-1/4 shadow-lg bg-gradient-to-r from-yellow-300 to-cyan-300 flex flex-col p-4 space-y-2">
                <div className="flex items-center space-x-2">
                    <AiOutlineMoneyCollect className="text-4xl text-blue-600" />
                    <p className="font-semibold text-teal-800 text-xl">Total Income</p>
                </div>
                <p className="text-3xl font-semibold text-emerald-700">13.250.000</p>
            </div>
        </section>
    )
}