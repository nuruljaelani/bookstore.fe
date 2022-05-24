import Image from "next/image";
import Wrapper from "pages/wrapper";
import { FaStar } from "react-icons/fa";
import b4 from "public/books/berdikaribook_I_2019_Feb_10_02_02_50.jpg"

export default function Kategori() {
    return (
        <Wrapper title="Kategori">
            <div className="flex flex-col space-y-6 my-4 md:my-6 lg:my-10">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium">Filsafat</p>
                <div className="flex space-x-0 md:space-x-4">
                    <div className="hidden md:flex flex-col border rounded text-sm basis-0 md:basis-1/4 p-3 space-y-2 bg-white">
                        <p className="font-medium">Semua Produk</p>
                        <p className="font-medium">Produk Terpopuler</p>
                        <p className="font-medium">Diskon</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 basis-full md:basis-3/4 gap-2">
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
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}