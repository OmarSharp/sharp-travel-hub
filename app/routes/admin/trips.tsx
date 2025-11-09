import React from 'react';
import Header from "../../../components/Header";

const Trips = () => {
    return (
        <main className="all-users wrapper">
            <Header
                title="Manage Trips"
                desc="View, Edit, Travel Plan and access detailed Trips !"
                ctaText="Create a trip"
                ctaUrl="/trips/create"
            />
        </main>
    );
};

export default Trips;