import Image from "next/image"
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa"
import payment from "../public/icons/payment.png"
import shipping from "../public/icons/shipping.png"

export default function Footer() {
    return (
        <div className="flex flex-col">
            <div className="flex py-4 md:py-8 justify-between">
                <div className="flex flex-col space-y-4">
                    <p className="font-semibold">Tentang</p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <p>About Us</p>
                        <p>Kerjasama</p>
                        <p>office Store</p>
                        <p>Kontak</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="font-semibold">Akun</p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <p>Login / Daftar</p>
                        <p>How to Order</p>
                        <p>Track Order</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="font-semibold">Lainya</p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <p>Kebijakan Privasi</p>
                        <p>Kebijakan Pengiriman</p>
                        <p>Kebijakan Pengembalian</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 basis-1/5">
                    <p className="font-semibold">Metode Pembayaran</p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Image src={payment} alt="Metode Pembayaran" />
                    </div>
                </div>
                <div className="flex flex-col space-y-4 basis-1/5">
                    <p className="font-semibold">Metode Pengiriman</p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Image src={shipping} alt="Metode Pembayaran" />
                    </div>
                </div>
            </div>
            <div className="flex py-4 md:py-8 justify-between">
                <div className="flex flex-col space-y-4">
                    <p className="font-semibold">Follow Us</p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                            <FaInstagram />
                            <p className="text-sm text-gray-600">Instagram</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaTwitter />
                            <p className="text-sm text-gray-600">Twitter</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaFacebook />
                            <p className="text-sm text-gray-600">Facebook</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaYoutube />
                            <p className="text-sm text-gray-600">Youtube</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col basis-3/4">
                    <p className="text-lg font-semibold">&copy; PT Baca Aja Dulu</p>
                    <p className="font-base">Jl. Soekarno-Hatta No. 20 Bandung, Jawa Barat</p>
                </div>
            </div>
        </div>
    )
}