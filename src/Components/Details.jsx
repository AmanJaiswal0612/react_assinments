import { Label } from "./Label.styled";
import { D } from "./Wrapper.styled";

export const Details = ({ data, fsubmit }) => {
  return fsubmit ? (
    <div>
      <h4 style={{ marginLeft: "60px" }}>{data.cnumber}</h4>
      <div style={{ display: "flex", gap: "20px", marginLeft: "60px" }}>
        <div>
          <Label font={"10px"}>CARD HOLDER</Label>
          <D>{data.cname}</D>
        </div>
        <div>
          <Label font={"10px"}>EXPIRY</Label>
          <D>
            {data.month}/{data.calender}
          </D>
        </div>
        <div>
          <Label font={"10px"}>CVV</Label>
          <D>{data.cvv}</D>
        </div>
      </div>
    </div>
  ) : (
    <h3 style={{ margin: "20px" }}>Fill Form And Click On Pay</h3>
  );
};
