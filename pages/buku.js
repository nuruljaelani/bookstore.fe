/* eslint-disable react/jsx-key */
import Image from "next/image";
import Wrapper from "./wrapper";
import b1 from "../public/books/berdikaribook_I_2019_Feb_10_02_15_18.jpg";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Buku() {
    const tabList = ['Deskripsi', 'Spesifikasi', 'Testimoni']

    const [qty, setQty] = useState(1)

    const addQty = () => {
        setQty(qty + 1)
    }

    const decQty = () => {
        setQty(qty - 1)
        if (qty == 1) {
            return setQty(1)
        }
    }
    return (
        <Wrapper title="Buku">
            <div className="flex flex-col md:flex-row my-2 lg:my-6 space-y-4 md:space-y-0 space-x-0 md:space-x-6">
                <div className="flex flex-col basis-1/3">
                    <Image src={b1} alt="Image" />
                </div>
                <div className="flex flex-col space-y-2 lg:space-y-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">Kosmos</p>
                            <p className="text-sm md:text-base lg:text-lg text-gray-400 font-medium">Carl Sagan</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-1 items-center">
                                <div className="flex">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <p>(5)</p>
                            </div>
                            <p className="text-gray-600 font-medium">Terjual 60</p>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <p className="text-sm font-semibold text-gray-700">Kategori</p>
                        <p className="text-sm font-semibold text-teal-700">Pengetahuan Umum</p>
                    </div>
                    <div className="flex space-x-1">
                        <div className="bg-yellow-600 p-1">
                            <p className="text-xs text-white">100 % Original</p>
                        </div>
                        <div className="bg-violet-500 p-1">
                            <p className="text-xs text-white">Sians</p>
                        </div>
                        <div className="bg-violet-500 p-1">
                            <p className="text-xs text-white">Filsafat</p>
                        </div>
                        <div className="bg-violet-500 p-1">
                            <p className="text-xs text-white">Tokoh</p>
                        </div>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-500">Rp 75.000</p>
                    <div className="flex items-center space-x-6">
                        <label>Jumlah</label>
                        <div className="flex items-center border">
                            <button type="button" className="p-3" onClick={addQty}>
                                <FaPlus />
                            </button>
                            <span className="px-4">{qty}</span>
                            <button type="button" onClick={decQty} className="p-3">
                                <FaMinus />
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4 md:space-x-6">
                        <button type="button" className="flex bg-rose-500 hover:bg-rose-600 rounded-lg py-2 px-4 space-x-2 items-center">
                            <AiOutlineShoppingCart className="text-white text-3xl" />
                            <p className="hidden md:block font-semibold text-sm text-white">Tambah Ke Keranjang</p>
                        </button>
                        <button type="button" className="flex border hover:bg-rose-100 border-rose-500 rounded-lg py-2 px-4 space-x-2 items-center">
                            <p className="font-semibold text-sm">Beli Sekarang</p>
                        </button>
                    </div>
                </div>
            </div>
            <Tab.Group>
                <Tab.List className="flex justify-between md:justify-start space-x-2 border-b">
                    {
                        tabList.map((tab) => (

                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button type="button" className={selected ? "basis-1/5 text-gray-700 font-semibold py-2 border-b-2 border-gray-700" : "font-medium py-2 basis-1/5 text-gray-500"}>
                                        {tab}
                                    </button>
                                )}
                            </Tab>
                        ))
                    }
                </Tab.List>
                <Tab.Panels as="div" className="bg-white rounded-2xl p-4 my-6 flex flex-col space-y-4">
                    <Tab.Panel>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique deleniti ab quisquam alias accusantium modi corporis, culpa sit consectetur error sint sed! Debitis magnam eos, deserunt voluptates et quae eum non nam ab perferendis facere. Atque voluptatibus dolorum impedit deserunt nulla. Ipsa dignissimos consectetur natus cum aperiam nobis non quis deleniti, vero aspernatur ut neque est rerum consequuntur laborum soluta! Maxime inventore qui labore voluptatum, debitis eius quo possimus ratione distinctio excepturi, dolorem perferendis temporibus incidunt quibusdam. Accusantium provident explicabo dolor iure esse! Itaque ipsa explicabo aliquid tempore ea nisi error eius est quam, excepturi, libero odio minus accusamus magni.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique deleniti ab quisquam alias accusantium modi corporis, culpa sit consectetur error sint sed! Debitis magnam eos, deserunt voluptates et quae eum non nam ab perferendis facere. Atque voluptatibus dolorum impedit deserunt nulla.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quae dolor. Doloribus tenetur adipisci molestias vero id repellendus quaerat sed optio, asperiores impedit inventore explicabo, esse eius, obcaecati aliquid illum. Quam corrupti dolorum laboriosam. Harum, alias laborum. Labore omnis, veniam iste ipsa excepturi autem corporis distinctio quis, voluptates quidem ratione!</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores incidunt nesciunt amet laborum rerum veritatis! Perferendis tenetur praesentium sunt repudiandae.</p>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex flex-col space-y-2">
                            <p className="text-xl font-semibold text-gray-700">Testimoni & Rating</p>
                            <div className="flex">
                                <FaStar className="text-rose-500 text-sm" />
                                <FaStar className="text-rose-500 text-sm" />
                                <FaStar className="text-rose-500 text-sm" />
                                <FaStar className="text-rose-500 text-sm" />
                                <FaStar className="text-rose-500 text-sm" />
                            </div>
                            <div className="flex space-x-2">
                                <div className="flex border border-rose-500 bg-rose-50 rounded-lg p-3">
                                    <p className="text-sm font-semibold">Semua Rating</p>
                                </div>
                                <div className="flex border border-rose-500 bg-rose-50 rounded-lg p-3">
                                    <p className="text-sm font-semibold">5 Bintang (2)</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="border rounded-md p-4 flex flex-col space-y-2">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">Billie Elish</p>
                                        <p className="text-xs text-gray-500">20 Februari 2022</p>
                                    </div>
                                    <div className="flex">
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                    </div>
                                    <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatem sapiente deserunt facere praesentium ex nihil.</p>
                                </div>
                                <div className="border rounded-md p-4 flex flex-col space-y-2">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">Parker Cannon</p>
                                        <p className="text-xs text-gray-500">15 Februari 2022</p>
                                    </div>
                                    <div className="flex">
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                        <FaStar className="text-rose-500 text-sm" />
                                    </div>
                                    <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatem sapiente deserunt facere praesentium ex nihil.</p>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </Wrapper>
    )
}