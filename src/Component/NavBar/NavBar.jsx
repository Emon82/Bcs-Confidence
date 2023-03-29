import React from 'react'
import './NavBar.css'

export default function NavBar({image}) {
return (
<div className='navimage'>

    <div className="overly">
        <div className="container">
            <div className="row">
                <div className="col-md-6 address">
                <p style={{margin:"10px"}}>+8801922-101514/15</p>
                <p style={{margin:"10px"}}>info@bcs-confidence.com</p>
                </div>
                <div className="col-md-6 addressancor" >
                    <a  href="">লগ-ইন</a>
                    <a  href="">রেজিষ্ট্রেশন</a>
                </div>
            </div>
            <h1 style={{color:"yellow",}}>BCS Confidence</h1>
            <h5 style={{color:"white"}}>BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান</h5>
        </div>
    </div>

</div>
)
}
