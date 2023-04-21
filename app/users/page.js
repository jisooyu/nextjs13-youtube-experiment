import getAllUsers from "@/app/lib/getAllUsers"
import Link from 'next/link';

export const metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const usersData = getAllUsers()
    const users = await usersData;
    const content = (
        <section>
            <h1>
                <Link href='/'>Backt to Home</Link>
            </h1>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    return content
}