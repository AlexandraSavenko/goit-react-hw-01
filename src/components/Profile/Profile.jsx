import css from "./Profile.module.css";

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
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImage} src={avatar} alt="User avatar" />
        <p className={css.profileText}>{username}</p>
        <p className={css.profileText}>{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
