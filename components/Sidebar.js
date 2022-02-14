import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineBook, AiOutlineDashboard, AiOutlineDatabase, AiOutlineExport, AiOutlinePayCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import MyLink from "./MyLink";

export default function Sidebar() {
    const router = useRouter()
    return (
        <section className="bg-gray-100 basis-1/5 min-h-screen border-r border-gray-400 shadow-lg">
            <div className="flex flex-col py-4 px-6 space-y-20">
                <div className="flex items-center">
                    <AiOutlineBook className="text-3xl text-teal-500" />
                    <p className="text-3xl font-bold text-teal-700">Buku.id</p>
                </div>
                <div className="flex flex-col space-y-3 px-2 py-6 bg-white rounded-3xl">
                    <Link href="/b">
                        <a className={router.pathname == "/b" ? "flex items-center space-x-2 text-teal-600 bg-gray-100 rounded-2xl py-2 px-3" : "flex items-center space-x-2 rounded-2xl py-2 px-3"}>
                            <AiOutlineDashboard />
                            <p className="font-medium">Dashboard</p>
                        </a>
                    </Link>
                    <Menu>
                        {({ active }) => (
                            <>
                                <Menu.Button className={active ? "flex space-x-2 items-center px-3 py-2 bg-gray-200" : "flex space-x-2 items-center px-3 py-2"}>
                                    <AiOutlineDatabase />
                                    <p className="font-medium text-sm">Data</p>
                                </Menu.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0">
                                    <Menu.Items>
                                        <Menu.Item as={"div"} className={"bg-gray-100 rounded px-10 flex flex-col font-medium text-sm space-y-4 py-2"}>
                                            <MyLink href="/b/product">Product</MyLink>
                                            <MyLink href="/b/product">Categories</MyLink>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                    {/* <Link href="/b/product">
                        <a className={router.pathname == "/b/product" ? "flex items-center space-x-2 text-teal-600 bg-gray-100 rounded-2xl py-2 px-3" : "flex items-center space-x-2 rounded-2xl py-2 px-3"}>
                            <AiOutlineBook />
                            <p className="font-medium">Product</p>
                        </a>
                    </Link> */}
                    <div className="flex items-center space-x-2 rounded-2xl py-2 px-3">
                        <AiOutlinePayCircle />
                        <p className="font-medium">Transaction</p>
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