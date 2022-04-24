import { Label, Input } from "./Label.styled";
import { useState } from "react";
import { CreditCard } from "./CreditCard";
export const CreditCardForm = () => {
  const [formdata, setFormData] = useState({});
  const [fsubmit, setsubmit] = useState(false);
  const handleChange = (e) => {
    let field = e.target;
    setFormData({ ...formdata, [field.name]: field.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmit(true);
  };

  return (
    <div className="main">
      <form
        onSubmit={handleSubmit}
        style={{ width: "300px", border: "1px solid red", padding: "25px" }}
      >
        <Label>CARDHOLDER NAME</Label>
        <br />
        <Input type="text" name="cname" onChange={handleChange} />
        <br />
        <Label>CARD NUMBER</Label>
        <br />
        <Input type="number" name="cnumber" onChange={handleChange} />
        <br />
        <div className="fdiv">
          <div>
            <Label>EXPIRY MOUNTH</Label>
            <br />
            <Input
              width="50px"
              type="number"
              name="month"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>EXPIRY YEAR</Label>
            <br />
            <Input
              width="50px"
              type="number"
              name="calender"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>CVV</Label>
            <br />
            <Input
              width="40px"
              type="number"
              name="cvv"
              onChange={handleChange}
            />
          </div>
        </div>
        <h6 className="pay">
          Payement amount:
          <Input
            width="50px"
            border="none"
            color="red"
            type="number"
            name="cash"
            onChange={handleChange}
          />
        </h6>
        <Input
          type="submit"
          color="white"
          bg="red"
          value="PAY"
          padding="5px 30px"
          align="30px"
        />
      </form>

      <CreditCard fsubmit={fsubmit} data={formdata} />
    </div>
  );
};
