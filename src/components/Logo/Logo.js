import pic from "../Main/Waterstone_black_1.png";

const Logo = (props) => {
  return (
    <div style={{display: "inline"}}>
      <img src={pic} alt="Logo" width={props.width} ></img>
    </div>
  )
};

export default Logo
