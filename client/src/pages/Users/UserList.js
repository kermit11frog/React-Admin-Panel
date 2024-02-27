import { useLoaderData } from "react-router-dom";
import Table from "../../components/Table/Table";
import ContentTop from "../../components/ContentTop/ContentTop"

const UserList = () => {
  const users = useLoaderData();
  return (
    <>
      <ContentTop pageName="User's List"/>
      <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>FullName</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.firstname} {user.lastname}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
