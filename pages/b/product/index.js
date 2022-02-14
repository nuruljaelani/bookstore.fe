/* eslint-disable react/jsx-key */
import ButtonAdd from "@components/Button/ButtonAdd"
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
            name: 'Fihi Ma fihi',
            author: 'Jalaludin Rumi'
        },
        {
            name: 'Fihi Ma fihi',
            author: 'Jalaludin Rumi'
        }
    ], [])

    const columns = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Author',
            accessor: 'author'
        }
    ], [])

    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <Layout>
            <p className="text-white text-3xl font-bold">Product</p>
            <div className="bg-white rounded-2xl p-4 my-6 flex flex-col space-y-4">
                <Link href="/b/product/create" passHref={true}>
                    <a>
                        <ButtonAdd>
                            Add product
                        </ButtonAdd>
                    </a>
                </Link>
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