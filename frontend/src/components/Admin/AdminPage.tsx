import { useEffect, useState } from "react";

type User = {
  id: number;
  email: string;
  createdAt: string;
};

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1 className="title1">Список пользователей</h1>
      {users.length === 0 ? (
        <p className="title3">Пользователей пока нет</p>
      ) : (
        <ul className="mainUl">
          {users.map((user) => (
            <li className="mainLi" key={user.id}>
              {user.email} —{new Date(user.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPage;
