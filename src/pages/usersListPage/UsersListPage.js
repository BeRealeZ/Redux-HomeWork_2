import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions";



function UsersListPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.preloaderReducer.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <div>
      <h1>Список пользователей</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersListPage;
