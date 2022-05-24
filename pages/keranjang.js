import Wrapper from "./wrapper";
import image1 from "public/books/berdikaribook_I_2019_Feb_10_02_13_23.jpg"
import image2 from "public/books/berdikaribook_I_2019_Feb_10_02_15_18.jpg"
import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function Keranjang() {
    return (
        <Wrapper title="Keranjang">
            <div className="flex flex-col my-4 sm:my-6 md:my-8 space-y-4 md:space-y-6">
                <p className="text-xl md:text-2xl font-medium text-gray-600">Keranjang Saya</p>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-6">
                    <div className="border rounded-lg p-4 flex flex-col basis-3/4 space-y-2">
                        <div className="flex flex-col md:flex-row space-x-4">
                            <div className="flex basis-10/12 space-x-4">
                                <div className="basis-3/12 md:basis-2/12">
                                    <Image src={image1} alt="Buku" />
                                </div>
                                <div className="flex flex-col basis-9/12 md:basis-10/12">
                                    <p className="text-gray-600 font-medium uppercase">Bob Dylan chronicles</p>
                                    <p className="text-rose-500 text-lg md:text-xl">Rp 55.000</p>
                                </div>
                            </div>
                            <div className="flex basis-2/12 items-center space-x-4">
                                <div className="flex items-center space-x-4">
                                    <FaMinus />
                                    <span className="text-lg text-gray-700 font-semibold">1</span>
                                    <FaPlus />
                                </div>
                                <p>|</p>
                                <button type="button" className="flex">
                                    <AiOutlineDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-x-4">
                            <div className="flex basis-10/12 space-x-4">
                                <div className="basis-3/12 md:basis-2/12">
                                    <Image src={image1} alt="Buku" />
                                </div>
                                <div className="flex flex-col basis-9/12 md:basis-10/12">
                                    <p className="text-gray-600 font-medium uppercase">Bob Dylan chronicles</p>
                                    <p className="text-rose-500 text-lg md:text-xl">Rp 55.000</p>
                                </div>
                            </div>
                            <div className="flex basis-2/12 items-center space-x-4">
                                <div className="flex items-center space-x-4">
                                    <FaMinus />
                                    <span className="text-lg text-gray-700 font-semibold">1</span>
                                    <FaPlus />
                                </div>
                                <p>|</p>
                                <button type="button" className="flex">
                                    <AiOutlineDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-x-4">
                            <div className="flex basis-10/12 space-x-4">
                                <div className="basis-3/12 md:basis-2/12">
                                    <Image src={image1} alt="Buku" />
                                </div>
                                <div className="flex flex-col basis-9/12 md:basis-10/12">
                                    <p className="text-gray-600 font-medium uppercase">Bob Dylan chronicles</p>
                                    <p className="text-rose-500 text-lg md:text-xl">Rp 55.000</p>
                                </div>
                            </div>
                            <div className="flex basis-2/12 items-center space-x-4">
                                <div className="flex items-center space-x-4">
                                    <FaMinus />
                                    <span className="text-lg text-gray-700 font-semibold">1</span>
                                    <FaPlus />
                                </div>
                                <p>|</p>
                                <button type="button" className="flex">
                                    <AiOutlineDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/4 border reounded-lg p-4 space-y-2 h-44">
                        <p className="font-semibold text-gray-700">Ringkasan pembelanjaan</p>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Diskon Produk</p>
                            <p className="font-semibold text-rose-600 text-lg">Rp 0</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Total Harga</p>
                            <p className="font-semibold text-gray-600 text-lg">Rp 115.000</p>
                        </div>
                        <button type="button" className="text-sm font-semibold bg-orange-500 text-white p-2 rounded shadow">
                            Order Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}