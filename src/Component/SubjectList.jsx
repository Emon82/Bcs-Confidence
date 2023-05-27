import React from 'react'

const SubjectList = ({weare}) => {
  return (
    <div style={{backgroundColor:"black",padding:" 50px 0px"}}>
    <div className="container">
      {/* <div className="card col-md-4"> */}
      <div className="row">
        {weare.map(({ src, title }, key) => (
          <div className="col-md-4 my-2" key={key}>
            <div className="card " style={{borderRadius:"20px"}}>
              <div className="card-body d-flex flex-row justify-content-center p-3">
                
                <h5 className="card-title" >{title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SubjectList