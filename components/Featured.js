import Image from "next/image";
import b1 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_01.jpg"
import b2 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_20.jpg"
import b3 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_37.jpg"
import b4 from "../public/books/berdikaribook_I_2019_Feb_10_02_02_50.jpg"
import b5 from "../public/books/berdikaribook_I_2019_Feb_10_02_08_46.jpg"

export default function Featured() {
    return (
        <div className="flex flex-col my-4 space-y-4 md:space-y-6 px-4 lg:px-0">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Featured Books</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
                <div className="flex flex-col space-y-2 border border-gray-300">
                    <Image src={b1} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border border-gray-300">
                    <Image src={b2} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border border-gray-300">
                    <Image src={b3} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border border-gray-300">
                    <Image src={b4} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 border border-gray-300">
                    <Image src={b5} alt="" />
                    <div className="flex flex-col space-y-2 p-2">
                        <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                    </div>
                </div>
            </div>
        </div>
    )
}