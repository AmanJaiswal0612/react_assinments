import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [lresult, setlResult] = useState("");

  const loginSucces = async (value) => {
    let res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(value)
    });
    let data = await res.json();
    console.log(data);
    if (data.error) {
      setLogin(true);
      setlResult(data.error);
    } else if (data.token) {
      setLogin(false);
      setlResult(`Login Succesful Token Id: ${data.token}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loginSucces, login, setLogin, lresult, setlResult }}
    >
      {children}
    </AuthContext.Provider>
  );
};
