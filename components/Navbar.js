import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"

const Navbar = ({ showLogin }) => {
    return (
        <nav className="bg-white w-full fixed top-0 z-50 shadow px-4 lg:px-0">
            <div className="flex container mx-auto max-w-5xl py-3 md:py-4 items-center justify-between">
                <div className="basis-1/4 flex items-center justify-between">
                    <Link href="/">
                        <a className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-500">Book.id</a>
                    </Link>
                    <Menu as={"div"} className="relative hidden md:block">
                        <Menu.Button className="text-sm font-medium flex items-center space-x-2 p-2 rounded-xl mr-4 md:mr-6 lg:mr-8 hover:bg-gray-100">
                            <p>Kategori</p>
                            <FaAngleDown />
                        </Menu.Button>
                        <Menu.Items as="div" className="flex flex-col absolute bg-white border text-sm font-medium rounded py-4 w-40 top-10">
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                <Link href="/kategori">
                                    Agama
                                </Link>
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Filsafat
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Novel
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Sastra & Puisi
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Fiksi
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Komik
                            </Menu.Item>
                            <Menu.Item as={"div"} className="hover:bg-gray-200 px-6 py-2">
                                Sejarah
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <div className="basis-2/4">
                    <div className="flex items-center relative">
                        <AiOutlineSearch className="absolute left-4 text-xl" />
                        <input type="text" className="rounded-3xl w-full pl-12 pr-6 py-2 md:py-3 bg-gray-100 focus:outline-none" />
                    </div>
                </div>
                <div className="basis-1/4 md:flex space-x-2 justify-end hidden items-center">
                    <Link href="/keranjang">
                        <a>
                            <AiOutlineShoppingCart className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-600" />
                        </a>
                    </Link>
                    <button type="button" className="border border-teal-500 font-semibold hover:bg-teal-600 hover:text-white py-2 px-3 text-teal-600 rounded-2xl text-sm" onClick={showLogin}>Masuk</button>
                    <Link href="/register">
                        <a className="bg-teal-500 hover:bg-teal-600 py-2 px-3 font-semibold rounded-2xl text-white text-sm">Daftar</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar