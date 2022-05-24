import { FaTimes } from 'react-icons/fa';

export default function Modal({ modal, children, closeModal }) {
    return (
        <>
            <div className={modal ? 'fixed z-40 inset-0 overflow-y-auto' : 'hidden'} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" aria-hidden="true" />
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block p-4 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:max-w-2xl">
                        <div className="flex justify-end mb-4">
                            <button type="button" onClick={closeModal}>
                                <FaTimes />
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}