import { Menu } from "@headlessui/react";
import Image from "next/image";
import avatar from 'public/avatar/147144.png'
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import Link from "next/link"

export default function Topbar() {
    return (
        <div className="px-6 py-2">
            <div className="flex py-2 px-2 justify-between items-center rounded-3xl">
                <div className="flex items-center bg-white/90 py-3 px-4 rounded-3xl space-x-4 basis-1/2">
                    <FaSearch />
                    <input type="text" className="outline-none bg-transparent w-full" />
                </div>
                <div className="flex basis-1/2 items-center justify-end space-x-4">
                    <div className="flex space-x-3">
                        <FaBell className="text-white text-2xl" />
                        <FaEnvelope className="text-white text-2xl" />
                    </div>
                    <Menu as={"div"} className="relative hidden md:block">
                        <Menu.Button >
                            <div className="flex items-center bg-white/90 rounded-3xl py-2 px-4">
                                <p className="text-sm font-semibold mr-2 text-gray-800">Admin</p>
                                <Image src={avatar} alt="Avatar" width={40} height={40} />
                            </div>
                        </Menu.Button>
                        <Menu.Items as="div" className="flex flex-col absolute bg-white border text-sm font-medium rounded-xl z-50 py-4 w-[8rem] top-15">
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                <Link href="/kategori">
                                    Profile
                                </Link>
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Setting
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Logout
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </div>
    )
}