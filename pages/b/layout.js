import Sidebar from "@components/Sidebar";
import Topbar from "@components/Topbar";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col">
                <main className="flex">
                    <Sidebar />
                    <section className="basis-4/5 relative bg-gray-100">
                        <div className="bg-gradient-to-r from-teal-400 to-blue-700 h-[250px] absolute inset-0">
                            <Topbar />
                        </div>
                        <section className="flex flex-col mt-32 relative px-6 space-y-6">
                            {children}
                        </section>
                    </section>
                </main>
                <footer>
                </footer>
            </div>
        </div>
    )
}