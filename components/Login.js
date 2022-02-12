import { FaQrcode, FaTimes } from 'react-icons/fa';

const Login = ({ modal, closeModal }) => {
    return (
        <div>
            <div className={modal ? 'fixed z-40 inset-0 overflow-y-auto' : 'hidden'} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" aria-hidden="true" />
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal}>
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <div className="mt-3 flex flex-col w-full">
                                    <div className="flex justify-between my-2">
                                        <p className="text-2xl leading-6 font-bold text-gray-700" id="modal-title">
                                            Login
                                        </p>
                                        <p className="font-semibold text-teal-500" id="modal-title">
                                            Daftar
                                        </p>
                                    </div>
                                    <div className="mt-8 flex flex-col">
                                        <form className="flex flex-col">
                                            <div className="flex flex-col">
                                                <label className="text-sm font-semibold text-gray-500 mb-2">Nomor Hp / Email</label>
                                                <input type="text" className="bg-white w-full outline-none border border-gray-300 focus:border-teal-500 rounded-lg p-2" />
                                            </div>
                                            <div className="flex justify-end mt-4">
                                                <p className="text-teal-500 text-xs font-medium tracking-tight mb-2">Lupa Kata sandi?</p>
                                            </div>
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-md font-semibold text-gray-400 hover:text-gray-500 py-2">Selanjutnya</button>
                                        </form>
                                        <p className="text-center text-gray-400 text-xs my-5">atau masuk dengan</p>
                                        <button type="button" className="border border-gray-300 hover:bg-gray-100 py-2 rounded-md text-center font-semibold text-gray-500">Metode Lain</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
