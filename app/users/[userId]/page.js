import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPosts"
import getAllUsers from "@/app/lib/getAllUsers"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { userId } }) {
    const userData = getUser(userId);
    const user = await userData
    if (!user.name) {
        return {
            title: 'User Not Found'
        }
    }
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({ params: { userId } }) {
    const userData = getUser(userId)
    const userPostsData = getUserPosts(userId)

    // const [user, userPosts] = await Promise.all(userData, userPostsData)
    const user = await userData;

    if (!user.name) return notFound()

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>

        </>
    )
}

// to make it SSG, not SSR. 사전에 id를 모두 알게 해서 SSR로 만듬
export async function generateStaticParams() {
    const usersData = getAllUsers();
    const users = await usersData;
    return users.map((user) => ({
        userId: user.id.toString()
    }))
}
