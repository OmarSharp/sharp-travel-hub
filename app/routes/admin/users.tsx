import React from 'react';
import {Header} from "../../../components";

const Users = () => {
    const user = {name:'Omar'}


    return (
        <main className="dashboard wrapper">
            <Header
                title={`Hi ${user.name ?? 'Guest'} ?!!`}
                desc="Show All Users in Real Time"
            />
            All users
        </main>
    );
};

export default Users;