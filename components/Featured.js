import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import b1 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_01.jpg"
import b2 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_20.jpg"
import b3 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_37.jpg"
import b4 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_50.jpg"
import b5 from "../public/books/berdikaribook_I_2019_Feb_10_02_08_46.jpg"

export default function Featured() {
    return (
        <div className="flex flex-col my-4 space-y-4 md:space-y-6 px-4 lg:px-0">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Featured Books</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
                <Link href="/buku">
                    <a className="flex flex-col space-y-2 border shadow rounded bg-white">
                        <Image src={b1} alt="" />
                        <div className="flex flex-col space-y-2 p-2">
                            <p className="font-semibold tracking-tight leading-4 text-gray-700">Lorem ipsum dolor sit amet consectetur</p>
                            <div className="flex items-center space-x-2">
                                <FaStar className="text-yellow-500 text-sm" />
                                <p className="text-sm font-semibold">4.6</p>
                                <p>|</p>
                                <p className="text-sm font-semibold text-gray-600">Tejual 30</p>
                            </div>
                            <p className="font-semibold text-gray-700">Rp 75.000</p>
                            <button type="button" className="text-sm font-semibold bg-sky-50 hover:bg-sky-100 rounded p-2 text-gray-600">
                                Beli
                            </button>
                        </div>
                    </a>
                </Link>
                <div className="flex flex-col space-y-2 border shadow rounded bg-white">
                    <Image src={b2} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight leading-4 text-gray-700">Lorem ipsum dolor sit amet consectetur</p>
                        <div className="flex items-center space-x-2">
                            <FaStar className="text-yellow-500 text-sm" />
                            <p className="text-sm font-semibold">4.6</p>
                            <p>|</p>
                            <p className="text-sm font-semibold text-gray-600">Tejual 30</p>
                        </div>
                        <p className="font-semibold text-gray-700">Rp 75.000</p>
                        <button type="button" className="text-sm font-semibold bg-sky-50 hover:bg-sky-100 rounded p-2 text-gray-600">
                            Beli
                        </button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border shadow rounded bg-white">
                    <Image src={b3} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight leading-4 text-gray-700">Lorem ipsum dolor sit amet consectetur</p>
                        <div className="flex items-center space-x-2">
                            <FaStar className="text-yellow-500 text-sm" />
                            <p className="text-sm font-semibold">4.6</p>
                            <p>|</p>
                            <p className="text-sm font-semibold text-gray-600">Tejual 30</p>
                        </div>
                        <p className="font-semibold text-gray-700">Rp 75.000</p>
                        <button type="button" className="text-sm font-semibold bg-sky-50 hover:bg-sky-100 rounded p-2 text-gray-600">
                            Beli
                        </button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border shadow rounded bg-white">
                    <Image src={b4} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight leading-4 text-gray-700">Lorem ipsum dolor sit amet consectetur</p>
                        <div className="flex items-center space-x-2">
                            <FaStar className="text-yellow-500 text-sm" />
                            <p className="text-sm font-semibold">4.6</p>
                            <p>|</p>
                            <p className="text-sm font-semibold text-gray-600">Tejual 30</p>
                        </div>
                        <p className="font-semibold text-gray-700">Rp 75.000</p>
                        <button type="button" className="text-sm font-semibold bg-sky-50 hover:bg-sky-100 rounded p-2 text-gray-600">
                            Beli
                        </button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border shadow rounded bg-white">
                    <Image src={b5} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight leading-4 text-gray-700">Lorem ipsum dolor sit amet consectetur</p>
                        <div className="flex items-center space-x-2">
                            <FaStar className="text-yellow-500 text-sm" />
                            <p className="text-sm font-semibold">4.6</p>
                            <p>|</p>
                            <p className="text-sm font-semibold text-gray-600">Tejual 30</p>
                        </div>
                        <p className="font-semibold text-gray-700">Rp 75.000</p>
                        <button type="button" className="text-sm font-semibold bg-sky-50 hover:bg-sky-100 rounded p-2 text-gray-600">
                            Beli
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}