/* eslint-disable react/jsx-key */
import { Tab } from "@headlessui/react"
import React, { Fragment } from "react"
import { useTable } from "react-table"
import Layout from "../layout"

export default function Index() {


    const data = React.useMemo(() => [
        {
            name: 'Fihi Ma fihi'
        },
        {
            name: 'Fihi Ma fihi'
        }
    ], [])

    const columns = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        }
    ], [])

    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    const orders = ['Masuk', 'Dikemas', 'Dikirim', 'Selesai', 'Batal']

    return (
        <Layout>
            <p className="text-white text-3xl font-bold">Order</p>
            <Tab.Group>
                <Tab.List className="flex space-x-2 py-1 bg-teal-800/30 rounded-2xl justify-between px-4">
                    {
                        orders.map((order) => (

                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button type="button" className={selected ? "bg-white basis-1/5 text-teal-700 font-semibold rounded-2xl py-2" : "font-semibold py-2 basis-1/5 text-white"}>
                                        {order}
                                    </button>
                                )}
                            </Tab>
                        ))
                    }
                </Tab.List>
                <Tab.Panels as="div" className="bg-white rounded-2xl p-4 my-6 flex flex-col space-y-4">
                    <Tab.Panel>
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
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </Layout>
    )
}