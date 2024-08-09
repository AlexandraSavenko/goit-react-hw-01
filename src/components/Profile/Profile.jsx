import "./Profile.css";
export default function Profile({
  user: {
    stats: { followers, views, likes },
    avatar,
    location,
    tag,
    username,
  },
}) {
  return (
    <div className="profileCard">
      <div>
        <img className="profileImage" src={avatar} alt="User avatar" />
        <p className="profileText">{username}</p>
        <p className="profileText">{tag}</p>
        <p className="profileText">{location}</p>
      </div>
      <ul className="profileList">
        <li className="profileListItem">
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className="profileListItem">
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className="profileListItem">
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
