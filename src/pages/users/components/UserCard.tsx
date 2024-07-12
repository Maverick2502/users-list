import { UsersInfoI } from "../../../models/users.model";
import classes from "../styles/styles.module.css";

interface UserCardProps {
  user: UsersInfoI;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <article
      className={classes["user-card"]}
      aria-labelledby={`user-${user.id}`}
      role="article"
    >
      <h3 id={`user-${user.id}`} tabIndex={0}>
        {user.name.firstname}
      </h3>
      <p>
        Email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>
      </p>
    </article>
  );
};

export { UserCard };
