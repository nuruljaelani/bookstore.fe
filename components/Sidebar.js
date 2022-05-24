import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineBook, AiOutlineDashboard, AiOutlineDatabase, AiOutlineExport, AiOutlinePaperClip, AiOutlinePayCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import DropdownLink from "./DropdownLink";

export default function Sidebar() {
    const dataRoute = ['/b/product', '/b/category', '/b/product/create']
    const trxRoute = ['/b/order', '/b/mutation']
    const router = useRouter()

    const link = {
        data: [
            [
                '/b/produk', 'Produk'
            ],
            [
                '/b/kategori', 'Kategori'
            ]
        ],
        transaksi: [
            [
                '/b/order', 'Order'
            ],
            [
                '/b/mutasi', 'Mutasi'
            ]
        ]
    }

    return (
        <section className="bg-white basis-1/5 min-h-screen border-r border-gray-100 shadow-lg">
            <div className="fixed">
                <div className="flex flex-col py-4 px-6 w-[16.6rem] space-y-10">
                    <div className="flex items-center">
                        <AiOutlineBook className="text-3xl text-teal-500" />
                        <p className="text-3xl font-bold text-teal-700">Buku.id</p>
                    </div>
                    <div className="flex flex-col space-y-3 px-2 py-6 rounded-3xl">
                        <Link href="/b">
                            <a className={router.pathname == "/b" ? "flex items-center space-x-2 text-emerald-900 bg-emerald-200 rounded-2xl py-2 px-3" : "flex items-center text-gray-800 space-x-2 rounded-2xl py-2 px-3"}>
                                <AiOutlineDashboard />
                                <p className="font-medium">Dashboard</p>
                            </a>
                        </Link>
                        <Menu>
                            <Menu.Button className={dataRoute.includes(router.pathname) ? "flex justify-between items-center px-3 py-2 text-emerald-900 bg-emerald-200 rounded-2xl" : "flex justify-between text-gray-800 items-center px-3 py-2"} >
                                <div className="flex items-center space-x-2">
                                    <AiOutlineDatabase />
                                    <p className="font-medium">Data</p>
                                </div>
                                <FaAngleDown />
                            </Menu.Button>
                            <Transition
                                enter="transition duration-500 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100">
                                <Menu.Items>
                                    <Menu.Item as={"div"} className={"flex flex-col font-medium text-sm space-y-1"}>
                                        {({ active }) => (
                                            <>
                                                <DropdownLink href="/b/product">Produk</DropdownLink>
                                                <DropdownLink href="/b/category">Kategori</DropdownLink>
                                            </>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu>
                            <Menu.Button className={trxRoute.includes(router.pathname) ? "flex justify-between items-center px-3 py-2 text-emerald-900 bg-emerald-200 rounded-2xl" : "flex justify-between text-gray-800 items-center px-3 py-2"} >
                                <div className="flex items-center space-x-2">
                                    <AiOutlinePayCircle />
                                    <p className="font-medium">Transaksi</p>
                                </div>
                                <FaAngleDown />
                            </Menu.Button>
                            <Transition
                                enter="transition duration-500 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0">
                                <Menu.Items>
                                    <Menu.Item as={"div"} className={"flex flex-col font-medium text-sm space-y-1"}>
                                        {({ active }) => (
                                            <>
                                                <DropdownLink active={active} href="/b/order">Order</DropdownLink>
                                                <DropdownLink href="/b/mutation">Mutasi</DropdownLink>
                                            </>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Link href="/b/user">
                            <a className={router.pathname == "/b/user" ? "flex items-center space-x-2 text-emerald-900 bg-emerald-200 rounded-2xl py-2 px-3" : "flex items-center text-gray-800 space-x-2 rounded-2xl py-2 px-3"}>
                                <AiOutlineUser />
                                <p className="font-medium">User</p>
                            </a>
                        </Link>
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
            </div>
        </section >
    )
}