export default function ButtonSave(props) {
    return (
        <button
            type="submit"
            className="text-orange-900 font-semibold w-32 text-center bg-orange-200 rounded-2xl shadow-md hover:bg-orange-300 p-2">
            {props.children}
        </button>
    )
}