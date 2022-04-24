import { Login } from "./Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { AuthResult } from "./AuthResult";
export const Navbar = () => {
  const { login, setLogin, setlResult } = useContext(AuthContext);
  return (
    <div>
      {login ? (
        <Login />
      ) : (
        <div style={{ display: "flex", gap: "100px" }}>
          <h1>Home</h1>
          <h1
            onClick={() => {
              setLogin(true);
              setlResult("");
            }}
          >
            Logout
          </h1>
          <h1>Signup</h1>
        </div>
      )}
      <AuthResult />
    </div>
  );
};
