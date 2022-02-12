import Link from "next/link";
import { AiOutlineBook, AiOutlineDashboard, AiOutlineExport, AiOutlinePayCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";

export default function Sidebar() {
    return (
        <section className="bg-gray-200 basis-1/5 min-h-screen border-r border-gray-400">
            <div className="flex flex-col py-4 px-6 space-y-20">
                <div className="flex items-center">
                    <AiOutlineBook className="text-3xl text-teal-500" />
                    <p className="text-3xl font-bold text-teal-700">Buku.id</p>
                </div>
                <div className="flex flex-col space-y-3 px-2 py-6 bg-white rounded-3xl">
                    <Link href="/b">
                        <a className="flex items-center space-x-2 text-teal-600 bg-gray-100 rounded-2xl py-2 px-3">
                            <AiOutlineDashboard />
                            <p className="font-medium">Dashboard</p>
                        </a>
                    </Link>
                    <Link href="/b/product">
                        <a className="flex items-center space-x-2 rounded-2xl py-2 px-3">
                            <AiOutlineBook />
                            <p className="font-medium">Product</p>
                        </a>
                    </Link>
                    <div className="flex items-center space-x-2 rounded-2xl py-2 px-3">
                        <AiOutlinePayCircle />
                        <p className="font-medium">Trancsaction</p>
                    </div>
                    <div className="flex items-center space-x-2 rounded-2xl py-2 px-3">
                        <AiOutlineUser />
                        <p className="font-medium">User</p>
                    </div>
                    <div className="flex items-center space-x-2 rounded-2xl py-2 px-3">
                        <AiOutlineExport />
                        <p className="font-medium">Report</p>
                    </div>
                    <div className="flex items-center space-x-2 rounded-2xl py-2 px-3">
                        <AiOutlineSetting />
                        <p className="font-medium">Setting</p>
                    </div>
                </div>
            </div>
        </section>
    )
}