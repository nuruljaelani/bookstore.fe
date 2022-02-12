import Topbar from "./Topbar";

export default function Content(props) {
    return (
        <div className="bg-gradient-to-br from-teal-500 to-blue-700 h-[250px]">
            <Topbar />
            {props.children}
        </div>
    )
}