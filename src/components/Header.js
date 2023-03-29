import classes from "./Header.module.css";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated === true && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}

          <li>
            {isAuthenticated ? (
              <button onClick={logoutHandler}>Logout</button>
            ) : (
              <button>Login</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
