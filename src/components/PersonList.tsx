type PersonListProps = {
  users: {
    id: number;
    name: string;
    email: string;
  }[];
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
          <h1>Users List</h1>
          <ul>
              {props.users.map((user) => (
                  <li key={user.id}>
                      <strong> {user.name}: {user.email} </strong>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default PersonList
