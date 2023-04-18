import { React } from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer id="footer" class="section_gaps home_footer">
      <div class="container none-on-small">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <h3 className="about">About us</h3>
            <h5>  BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান 
              {/* <span>{!about && "..."}</span>{about && <span>AI, Data Analytics, Robotics, Embedded Solutions with Beacon, AR, VR Applications and Gaming and Animation. TechKnowGram Limited is an ISO 9001: 2015, ISO 14001: 2015 and ISO/IEC 27001: 2013 certified company and is a member of Bangladesh Association of Software BASIS, Bangladesh and Japan Chamber of Commerce & Industries (JBCCI), Bangladesh Computer Samity BCS, Bangladesh Association of Call Centers and Outsourcing BACCO, Ecommerce Association of Bangladesh e-CAB, CTO Forum of Bangladesh and SheTrades Commonwealth Program by International Trade Centre ITC.</span>}</span><span onClick={goToabout} style={{ color: "blue", cursor: "pointer" }}> {about ? "Read Less" : "Read more"} */}
            </h5>
           {/* <div className=""> 
          <img  style={{height:"55px", width:"55px",margin:"10px",borderRadius:"10px"}} src={logo2} alt="" />
          <img style={{height:"55px", width:"65px",margin:"10px",}} src={logo1} alt="" />
          <img style={{height:"55px", width:"55px",margin:"10px",borderRadius:"10px"}} src={logo3} alt=""  />
          </div> */}
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="footer_content">
              {/* <!--<h3>Contact</h3>--> */}
              {/* @if($key==0) */}
              <h3>Contact</h3>
              {/* @else */}
              {/* @endif */}
              <div class="list-none">
                {/* @if($key==0) */}
                <h4><a style={{ color: "#9700ff" }} href="https://www.bcs-confidence.com">BCS Confidence</a></h4>
                {/* @endif */}
                {/* <h5><a href="javascript:;">{{$footcon->address}}</a></5> */}
                <h5><a href="javascript:;">২৬, ইন্দিরা রোড, মা মেডিসিন ও UCB Bank বুথের ২য় তলা, ফার্মগেইট, ঢাকা</a></h5>
                {/* @if($footcon->email) */}
                {/* <h5><a href="mailto:{{$footcon->email}}">{{$footcon->email}}</a></h5> */}
                <h5><a href="">info@bcs-confidence.net</a></h5>
                {/* @endif */}
                {/* @if($footcon->phone) */}
                {/* <h5><a href="tel:{{$footcon->phone}}">{{$footcon->phone}}</a></h5> */}
                <h5><a href="">+8801922-101514/15</a></h5>
                {/* @endif */}
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div class="footer_content">
              {/* <!--<h3>Contact</h3>--> */}
              {/* @if($key==0) */}
              {/* @else */}
              <h3>Pages</h3>
              {/* @endif */}
              <div class="list-none">
                {/* @if($key==0) */}
                {/* @endif */}
                {/* <h5><a href="javascript:;">{{$footcon->address}}</a></5> */}
                <h5><a  href="javascript:;">নিয়মাবলি</a></h5>
                {/* @if($footcon->email) */}
                {/* <h5><a href="mailto:{{$footcon->email}}">{{$footcon->email}}</a></h5> */}
                <h5><a  href="">সকল প্রস্তুতি</a></h5>
                {/* @endif */}
                {/* @if($footcon->phone) */}
                {/* <h5><a href="tel:{{$footcon->phone}}">{{$footcon->phone}}</a></h5> */}
                <h5><a href="">FAQ</a></h5>
                {/* @endif */}
              </div>
            </div>
          </div>
          {/* @endforeach */}
          <div class="col-lg-3 col-md-3">
            <div class="logo">
              {/* <img class="img-fluid w-50" src="@if($homepage->logo) {{asset($homepage->logo)}}  @else {{asset('frontend/images/logo.png')}} @endif" alt=""> */}

              <img class="img-fluid w-80" style={{width: "137px"}} src="https://bcsconfidence.prostuti.net/admin/media/logo/logo-63a43964406bc.png" alt="" />
            </div>

            <h5 class="mb-2">Follow Us On:</h5>

            <div class="social mb-5">
              <a href="https://www.facebook.com/bcs-confidence.prostuti.net" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square" style={{ fontSize: "30px", color: "#1877F2", marginRight: "10px" }} ></i></a>
              <a href="https://twitter.com/prostuti_net" target="_blank" rel="noreferrer"><i class="fab fa-twitter" style={{ fontSize: "30px", color: "#1D9BF0", marginRight: "10px" }}></i></a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i class="fab fa-instagram" style={{ fontSize: "30px", color: "#FF0000", marginRight: "10px" }}></i></a>
              <a href="https://bd.linkedin.com/in/prostuti-net-b040b9266/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin" style={{ fontSize: "30px", color: "#0A66C2", marginRight: "10px" }}></i></a>
            </div>

            {/* <a class="btn btn-dark" href="http://quizwin.xyz/admin/uploads/quizbuz.apk">
              <i class="fa fa-download mx-2" aria-hidden="true"></i>
              Download App
            </a> */}

          </div>
        </div>
        <div class="row">
          <div id="footer-bottom" class="clr no-footer-nav p-5">
            <div id="footer-bottom-inner" class="container clr">
              <div id="copyright" class="clr" role="contentinfo">
                <div class="d-flex justify-content-center align-items-center"> 

                {/* © All Rights Reserved by Prostuti.net <a href="https://prostuti.net" target="_Blank" rel="noreferrer">  </a> */}

                  <a href="#"></a> &nbsp;© Powered By TechKnowGram Limited &nbsp;<a href="https://www.techknowgram.com" target="_Blank" rel="noreferrer"><img src={require("../../assets/image/navlogo.png")} width="100" height="35" class="lazyloaded" data-ll-status="loaded" /><noscript><img src={require("../../assets/image/navlogo.png")} width="100" height="150" /></noscript> </a>&nbsp; & Prostuti &nbsp;<a href="https://www.prostuti.net" target="_Blank" rel="noreferrer"> <img src={"https://prostuti.net/admin/media/logo/logo-63a43964406bc.png"} width="100" height="35" class="lazyloaded" data-ll-status="loaded" /><noscript><img src={"https://prostuti.net/admin/media/logo/logo-63a43964406bc.png"} width="100" height="150" /></noscript> </a>
                </div>
              </div>
              {/* <!-- #copyright --> */}


            </div>
            {/* <!-- #footer-bottom-inner --> */}


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
