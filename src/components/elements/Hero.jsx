import React, { useState } from "react";
import carddata from "../utils/Carddetail.json"


const Hero = () => {
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle]= useState("");

  const myFunction = () => {
    const random_data = carddata[Math.floor(Math.random() * carddata.length)];
    console.log(random_data)
    setData(random_data.name);
    setImage(random_data.img);
    setTitle(random_data.title);
  };

  // const [number,setNumber]=useState("");

  // function selectCard() {
  //    let rand= Math.floor(Math.random * data.length);
  // }
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row mt-5">
            {
              carddata.map((item)=>(
                <div className="col-md-4 mb-3 mx-auto" >
                <div className="card bg-dark text-black border-0">
                  <img src={item.img} className="card-img" alt="no" />
                  <div className="card-img-overlay ">
                    <div className=" d-flex align-items-center ">
                      <h1 className="card-h">{item.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
              )
              
              )
            }
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button className="btn " onClick={myFunction}>
                Click Me
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mx-auto my-5">
              <div className="card">
                <div className="card-body">
                  <div>
                  <img src={image} className="card-img" alt="" />
                  </div>
                  <h1>{data}</h1>
                  <p>{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
