import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const { loginSucces } = useContext(AuthContext);

  const handleChange = (e) => {
    let field = e.target;
    setFormData({ ...formData, [field.name]: field.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginSucces(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
