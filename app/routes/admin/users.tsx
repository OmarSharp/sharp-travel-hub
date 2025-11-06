
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/table"
import Header from "../../../components/Header";
// import {users} from "~/constants";
import {cn} from "~/lib/utils";
import {getAllUsers} from "~/appwrite/auth";
import type {Route} from "../../../.react-router/types/app/routes/admin/+types/users";

export const loader =async () =>{
    const {users, total} = await getAllUsers(10, 0);
    return {users, total};
}

const Users = ({loaderData}: Route.ComponentProps) => {
    // const user = {name:'Omar'}
    const { users } = loaderData;



    return (
        <main className="all-users wrapper">
            <Header
                title="Manage Users"
                desc="Filter, sort, and access detailed user profiles"
            />
            <Table>
                <TableCaption>A list of your Users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">#</TableHead>
                        <TableHead className="w-[150px]">name</TableHead>
                        <TableHead className="w-[150px]">Email</TableHead>
                        <TableHead className="w-[100px]">Date Joined</TableHead>

                        <TableHead className="text-right w-[150px]">Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">
                                <img src={user.imageUrl || 'assets/images/david.webp'}
                                     alt={user.name || 'OmarSharp'}
                                     referrerPolicy="no-referrer"
                                     className="size-7 flex"/>
                                </TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="text-right">{user.joinedAt}</TableCell>
                            <TableCell className="text-right"> <span className={cn('bg-white p-1 rounded-full', user.status === 'user' ? 'bg-yellow-500' : 'bg-blue-500')}>{user.status}</span></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>

                </TableFooter>
            </Table>
        </main>
    );
};

export default Users;