
import {dashboardStats, user, allTrips} from "~/constants";
import {getUser} from "~/appwrite/auth";
import type {Route} from "../../../.react-router/types/app/routes/admin/+types/dashboard";
import Header from "../../../components/Header";
import StatusCard from "../../../components/StatusCard";
import TripsCard from "../../../components/TripsCard";

export const clientLoader = async () => await getUser();

const Dashboard = ({loaderData}: Route.ComponentProps) => {

    const user = loaderData as User | null;

    const {totalUsers, usersJoined,
        totalTrips, tripsCreated, userRole} = dashboardStats;

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Hi ${user?.name ?? 'Guest'} ?!!`}
                desc="Track Your App in Real Time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatusCard
                    headerTitle ="All Users"
                    total={totalUsers}
                    currentMonthCount ={usersJoined.currentMonth}
                    lastMonthCount ={usersJoined.lastMonth}/>

                    <StatusCard
                        headerTitle ="All Trips"
                        total={totalTrips}
                        currentMonthCount ={tripsCreated.currentMonth}
                        lastMonthCount ={tripsCreated.lastMonth}/>

                    <StatusCard
                        headerTitle ="Active Users"
                        total={userRole.total}
                        currentMonthCount ={userRole.currentMonth}
                        lastMonthCount ={userRole.lastMonth}/>
                </div>
            </section>

            <section className="container">
                <h1 className="text-xl font-bold text-slate-800">Created Trips</h1>
                <div className="trip-grid">
                    {allTrips.slice(0,6)
                        .map(({id, name, imageUrls,itinerary,tags,estimatedPrice})=>(
                        <TripsCard
                        key={id}
                        id={id.toString()}
                        name={name}
                        imageUrl={imageUrls[0]}
                        location={itinerary?.[0]?.location ?? ''}
                        tags={tags}
                        price={estimatedPrice}/>
                    ))}
                </div>
            </section>



        </main>
    );
};

export default Dashboard;