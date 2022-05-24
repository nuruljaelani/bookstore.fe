import { FaPlus } from "react-icons/fa";

export default function ButtonAdd({ children, click }) {
    return (
        <button type="button" onClick={click} className="flex w-36 bg-violet-100 rounded-2xl hover:bg-violet-200 py-2 justify-center text-xs items-center text-white font-medium">
            <FaPlus className="mr-2 text-violet-800" />
            <p className="text-violet-800">{children}</p>
        </button>
    )
}