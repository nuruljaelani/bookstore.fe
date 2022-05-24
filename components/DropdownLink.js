import Link from "next/link"

export default function DropdownLink(props) {
    let { href, children, ...rest } = props
    return (
        <Link href={href}>
            <a className="px-10 py-2" {...rest}>{children}</a>
        </Link>
    )
}