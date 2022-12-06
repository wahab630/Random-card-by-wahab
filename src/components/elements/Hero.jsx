import React from "react";

const data = [
  {
    img: "assets/one.jpg",
    name:"Card 1"
  },
  {
    img: "assets/two.jpg",
    name:"Card 1"
  },
  {
    img: "assets/three.jpg",
    name:"Card 1"
  },
  {
    img: "assets/four.jpg",
    name:"Card 1"
  },
  {
    img: "assets/five.jpg",
    name:"Card 1"
  }
];

const Hero = () => {
  function selectCard() {
    return (document.getElementById("pick-card").innerHTML =
      Math.floor(Math.random() * 5) + 1);
  }
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row mt-5">
            {data.map((v, i) => {
              return (
                <>
                  <div className="col-md-4 mb-3 mx-auto" key={0}>
                    <div className="card bg-dark text-black border-0">
                      <img src={v.img} className="card-img" alt="no" />
                      <div className="card-img-overlay ">
                        <div className=" d-flex align-items-center ">
                          <h1 className="card-h">{v.name}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button className="btn " onClick={selectCard}>Click Me</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mx-auto my-5">
              <div className="card">
                <div className="card-body">
                  <h1 id="pick-card">

                  </h1>
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
