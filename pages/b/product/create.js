import ButtonSave from "@components/Button/ButtonSave"
import { Listbox, Transition } from "@headlessui/react"
import Layout from "../layout"
import { FaAngleDown, FaCheck } from "react-icons/fa"
import { AiFillCheckCircle } from "react-icons/ai"
import { useState, Fragment } from "react"

const categories = [
    { name: 'Agama' },
    { name: 'Fiksi' },
    { name: 'Filsafat' },
    { name: 'Novel' },
    { name: 'Puisi' },
    { name: 'Siens' }
]

export default function Create() {

    const [selected, setSelected] = useState(categories[0])

    const route = "/b/product"
    return (
        <Layout route={route}>
            <p className="text-white text-3xl font-bold">Tambah Produk</p>
            <div className="bg-white rounded-2xl p-4 my-10 flex flex-col space-y-4 shadow-lg">
                <form className="p-6 flex flex-col space-y-4">
                    <div className="flex space-x-6">
                        <div className="flex flex-col basis-1/2">
                            <label className="font-medium text-sm">Kategori</label>
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <FaAngleDown />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {categories.map((category, categoryIdx) => (
                                                <Listbox.Option
                                                    key={categoryIdx}
                                                    className={({ active }) =>
                                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={category}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {category.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <AiFillCheckCircle className="w-5 h-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label className="font-medium text-sm">Nama Produk</label>
                            <input type="text" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex flex-col basis-1/2">
                            <label className="font-medium text-sm">Penulis</label>
                            <input type="text" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label className="font-medium text-sm">Penerbit</label>
                            <input type="text" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex flex-col basis-1/2">
                            <label className="font-medium text-sm">Status</label>
                            <select className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none text-sm">
                                <option disabled selected>-- Pilih --</option>
                                <option value="Ready">Ready</option>
                                <option value="Pre Order">Pre Order</option>
                            </select>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label className="font-medium text-sm">Harga</label>
                            <input type="number" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col space-y-4">
                        <p className="text-2xl">Dimensi & Berat</p>
                        <div className="flex space-x-6">
                            <div className="flex flex-col basis-1/3">
                                <label className="font-medium text-sm">Panjang</label>
                                <input type="number" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                            </div>
                            <div className="flex flex-col basis-1/3">
                                <label className="font-medium text-sm">Tinggi</label>
                                <input type="number" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                            </div>
                            <div className="flex flex-col basis-1/3">
                                <label className="font-medium text-sm">Berat</label>
                                <input type="number" className="rounded-lg shadow-md cursor-default p-2 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:outline-none" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <label className="font-medium text-sm">Foto</label>
                        <input type="file" className="rounded-xl bg-white p-2 border focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium text-sm">Deskripsi</label>
                        <textarea className="rounded-xl bg-white p-2 border focus:outline-none"></textarea>
                    </div>
                    <div className="flex">
                        <div className="basis-4/5">
                            <ButtonSave>Simpan</ButtonSave>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}