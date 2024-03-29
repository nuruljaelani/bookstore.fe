/* eslint-disable react/jsx-key */
import ButtonAdd from "@components/Button/ButtonAdd"
import { Dialog, Transition } from "@headlessui/react"
import React, { useState, Fragment } from "react"
import { useQuery } from "@tanstack/react-query"
import { useTable } from "react-table"
import Layout from "../layout"

export default function Index({categories}) {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const data = React.useMemo(() => categories, [categories])

    const columns = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        }
    ], [])

    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <Layout>
            <p className="text-white text-3xl font-bold">Kategori</p>
            <div className="bg-white rounded-2xl p-4 my-6 flex flex-col space-y-4">
                <ButtonAdd click={toggleModal}>
                    Tambah Kategori
                </ButtonAdd>
                <table {...getTableProps()} className="w-full text-left">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="p-2 bg-teal-100"
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="border">
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className="p-2 border"
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Transition appear show={modal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={toggleModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500/70" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Category
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form>
                                        <div className="flex flex-col">
                                            <label className="text-sm font-medium text-gray-500">Name</label>
                                            <input type="text" className="bg-white rounded-md border focus:outline-none p-2" />
                                        </div>
                                    </form>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={toggleModal}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </Layout >
    )
}

export async function getServerSideProps(context) {

    const res = await fetch("http://go-app:8080/api/v1/categories")
    const response = await res.json()
    const categories = response.data
    console.log(categories)

    return {
        props: {
            categories
        }
    }
}