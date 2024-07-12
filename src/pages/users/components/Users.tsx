import classes from "../styles/styles.module.css";
import { UserCard } from "./UserCard";
import { useUsers } from "../hook/useUsers";

const Users = () => {
  const { error, filteredData, handleOnChange, isLoading } = useUsers();

  return (
    <div className={classes["container"]}>
      <input
        type="text"
        placeholder="Search users..."
        onChange={handleOnChange}
        aria-label="Search users"
        className={classes["search-input"]}
      />

      {error && (
        <div className={classes["error"]} role="alert">
          Error loading users.
        </div>
      )}

      {!error && isLoading && (
        <div className={classes["loading"]} role="alert">
          Loading...
        </div>
      )}

      {!error && !isLoading && filteredData.length === 0 && (
        <div className={classes["no-data"]}>No data found.</div>
      )}

      <section className={classes["user-grid"]} aria-live="polite">
        {filteredData.length > 0 &&
          filteredData.map((user) => <UserCard key={user.id} user={user} />)}
      </section>
    </div>
  );
};

export { Users };
