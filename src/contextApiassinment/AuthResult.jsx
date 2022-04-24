import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const AuthResult = () => {
  const { lresult } = useContext(AuthContext);
  return <h1>{lresult}</h1>;
};