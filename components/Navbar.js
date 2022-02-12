const Navbar = ({ showLogin }) => {
    return (
        <nav className="bg-white w-full fixed top-0 z-50 shadow-lg">
            <div className="flex container mx-auto max-w-6xl p-3 md:p-4 items-center justify-between">
                <div className="basis-1/5">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-500">Book.id</p>
                </div>
                <div className="basis-3/5">
                    <input type="text" className="rounded-3xl w-full px-4 py-2 md:py-3 bg-gray-100 focus:outline-none" />
                </div>
                <div className="basis-1/5 flex space-x-2 justify-end">
                    <button type="button" className="border border-teal-500 font-semibold hover:bg-teal-600 hover:text-white py-2 px-3 text-teal-600 rounded-2xl text-sm" onClick={showLogin}>Masuk</button>
                    <button type="button" className="bg-teal-600 hover:bg-teal-700 py-2 px-3 font-semibold rounded-2xl text-white text-sm">Daftar</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar