import React, { useContext } from "react";
import { UserContext } from "../../../Context/AuthContext";

const Advertise = () => {
  const { changeName, name } = useContext(UserContext);

  return (
    <div className="my-10 w-10/12 mx-auto ">
      <p className="text-3xl text-center text-primary py-4"> Advertise </p>

      <div className="App">
        <img className="rounded-xl" src={name} alt="" /> <br />
        <button className="btn" onClick={changeName}>
          Change Image
        </button>
      </div>


    </div>
  );
};

export default Advertise;
