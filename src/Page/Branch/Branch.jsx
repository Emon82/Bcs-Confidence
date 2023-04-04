import React from 'react'
import BranchComponent from '../../Component/BranchComponent'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
export default function Branch() {
  return (
    <div>
      <NavBar/>
      <h1 style={{textAlign:"center",padding:"15px",margin:"10px"}}>ঢাকার শাখাসমূহ</h1>
      <BranchComponent/>
      <Footer/>
    </div>
  )
}
