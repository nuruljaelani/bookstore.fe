import { FaPlus } from "react-icons/fa";

export default function ButtonAdd(props) {
    return (
        <button type="button" className="flex w-32 bg-emerald-400 rounded-2xl hover:bg-emerald-500 py-2 justify-center text-xs items-center text-white font-medium">
            <FaPlus className="mr-2" />
            {props.children}
        </button>
    )
}