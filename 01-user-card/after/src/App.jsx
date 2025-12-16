import "./user.css";
import user from "./user.json";
import UserCard from "./UserCard";
import { UserCardClass } from "./UserCardClass";

function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </div>
  );
}

export default App;
