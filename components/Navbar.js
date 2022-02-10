const Navbar = () => {
    return (
        <nav className="bg-gray-800 w-full">
            <div className="flex container mx-auto max-w-6xl p-4 items-center justify-between">
                <div className="basis-1/5">
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">Book.id</p>
                </div>
                <div className="basis-3/5">
                    <input type="text" className="rounded-xl w-full px-4 py-2 border border-gray-600 bg-gray-900 focus:outline-none text-white" />
                </div>
                <div className="basis-1/5 flex space-x-2 justify-end">
                    <button type="button" className="bg-teal-500 hover:bg-teal-600 py-2 px-3 rounded-lg text-white text-sm">Login</button>
                    <button type="button" className="bg-teal-600 hover:bg-teal-700 py-2 px-3 rounded-lg text-white text-sm">Daftar</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar