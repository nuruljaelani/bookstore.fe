import { useRouter } from "next/router"
import Layout from "../layout"

export default function Create() {

    const route = "/b/product"
    return (
        <Layout route={route}>
            <p className="text-white text-3xl font-bold">Add Product</p>
            <div className="bg-white rounded-2xl p-4 my-6 flex flex-col space-y-4 shadow-lg">
                <form className="p-6 flex flex-col space-y-4">
                    <div className="flex">
                        <label className="font-medium basis-1/5">Category</label>
                        <select className="rounded-xl bg-white p-2 basis-4/5 border focus:outline-none">
                            <option disabled selected>-- Choose --</option>
                        </select>
                    </div>
                    <div className="flex">
                        <label className="font-medium basis-1/5">Product Name</label>
                        <input type="text" className="rounded-xl bg-white p-2 basis-4/5 border focus:outline-none" />
                    </div>
                    <div className="flex">
                        <label className="font-medium basis-1/5">Description</label>
                        <textarea className="rounded-xl bg-white p-2 basis-4/5 border focus:outline-none"></textarea>
                    </div>
                    <div className="flex">
                        <div className="basis-1/5"></div>
                        <div className="basis-4/5">
                            <button type="submit" className="text-white font-semibold w-32 text-center bg-violet-500 rounded-xl shadow hover:bg-violet-600 p-2">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}