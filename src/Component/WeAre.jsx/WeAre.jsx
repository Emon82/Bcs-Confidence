import React from "react";

export default function WeAre({weare}) {
  return (
    <div>
      <div className="container">
        {/* <div className="card col-md-4"> */}
        <div className="row">
          {weare.map(({ src, title }, key) => (
            <div className="col-md-4 my-2" key={key}>
              <div className="card " style={{borderRadius:"20px"}}>
                <div className="card-body d-flex flex-row justify-content-center p-3">
                  <img
                    //className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                    src={src}
                    alt={title}
                  />
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
