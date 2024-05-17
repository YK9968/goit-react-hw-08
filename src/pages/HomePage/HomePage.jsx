import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <p>
        This service will help you store contacts in your personal phone book.
      </p>
    </div>
  );
}
