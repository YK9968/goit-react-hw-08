import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores
        maiores nulla consectetur eveniet excepturi, ratione, quia enim porro
        quis explicabo molestias ea? In qui molestias, temporibus enim vitae
        ducimus.
      </p>
    </div>
  );
}
