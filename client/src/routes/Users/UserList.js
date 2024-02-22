import { useLoaderData } from "react-router-dom"

const loader = async () => {
    const response = await fetch("http://localhost:5000/users")
    const data = await response.json()
    return data
}

const UserList = () => {
    const users = useLoaderData()
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>FullName</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.firstname} {user.lastname}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default UserList
export { loader }