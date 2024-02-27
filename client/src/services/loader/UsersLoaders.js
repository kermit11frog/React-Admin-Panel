const usersLoader = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    return data;
};

const userLoader = async ({params}) => {
    const response = await fetch(`http://localhost:5000/users/${params.id}`);
    const user = await response.json();
    return user;
};

export { usersLoader, userLoader }