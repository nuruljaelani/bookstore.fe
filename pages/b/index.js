import DashboardCard from "@components/DashboardCard";
import Layout from "./layout";

export default function Index() {

    return (
        <Layout>
            <p className="text-white text-3xl font-bold">Dashboard</p>
            <DashboardCard />
        </Layout>
    )
}