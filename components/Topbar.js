import Image from "next/image";
import avatar from 'public/avatar/147144.png'

export default function Topbar() {
    return (
        <div className="px-6 py-2">
            <div className="flex py-2 px-2 justify-end items-end bg-white shadow-md rounded-3xl">
                <div className="flex items-center">
                    <p className="text-sm font-semibold mr-2 text-gray-800">Admin</p>
                    <Image src={avatar} alt="Avatar" width={40} height={40} />
                </div>
            </div>
        </div>
    )
}