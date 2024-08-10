import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
