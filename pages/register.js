import Wrapper from "./wrapper";

export default function Register() {
    return (
        <Wrapper title="Register">
            <div className="flex items-center justify-center my-8">
                <div className="flex basis-1/3 my-6 border bg-white rounded-2xl shadow-lg py-4 px-6">
                    <form className="flex flex-col w-full space-y-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Nama Lengkap</label>
                            <input type="text" className="bg-white rounded-xl py-2 px-2 border focus:outline-none focus:border-teal-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Email</label>
                            <input type="text" className="bg-white rounded-xl py-2 px-2 border focus:outline-none focus:border-teal-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Password</label>
                            <input type="password" className="bg-white rounded-xl py-2 px-2 border focus:outline-none focus:border-teal-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Confirm Password</label>
                            <input type="password" className="bg-white rounded-xl py-2 px-2 border focus:outline-none focus:border-teal-400" />
                        </div>
                        <div className="flex w-full">
                            <button type="button" className="bg-emerald-500 w-full font-semibold hover:bg-emerald-600 shadow rounded-2xl py-2 text-white">Daftar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}