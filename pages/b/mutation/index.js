/* eslint-disable react/jsx-key */
import ButtonAdd from "@components/Button/ButtonAdd"
import ButtonSave from "@components/Button/ButtonSave"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useTable } from "react-table"
import Layout from "../layout"

export default function Index() {

    const router = useRouter()
    console.log(router)

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

    return (
        <Layout>
            <p className="text-white text-3xl font-bold">Mutasi</p>
            <div className="bg-white rounded-2xl p-4 my-6 flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                    <p className="text-lg font-semibold">Filter</p>
                    <div className="flex">
                        <form className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                                <label className="text-sm font-medium">Tanggal Awal</label>
                                <input type="date" className="bg-white outline-none rounded-lg border p-2" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <label className="text-sm font-medium">Tanggal Akhir</label>
                                <input type="date" className="bg-white outline-none rounded-lg border p-2" />
                            </div>
                            <ButtonSave>
                                Cari
                            </ButtonSave>
                        </form>
                    </div>
                </div>
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
        </Layout>
    )
}