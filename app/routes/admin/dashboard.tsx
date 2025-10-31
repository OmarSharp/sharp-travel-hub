import React from 'react';
import {Header} from "../../../components";

const Dashboard = () => {

    const user = {name:'Omar'}

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Hi ${user.name ?? 'Guest'} ?!!`}
                desc="Track Ypur App in Real Time"
            />
            Dashboard
        </main>
    );
};

export default Dashboard;