import Profile from "../Profile/Profile";
import userData from "../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../friends.json";

export default function App() {
  return (
    <div>
      <ul></ul>
      <Profile user={userData} />
      <FriendList friends={friends} />
    </div>
  );
}
