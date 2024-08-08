export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  console.log(name);

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>Friend name{name}</p>
      <p>Friend status{isOnline}</p>
    </div>
  );
}
