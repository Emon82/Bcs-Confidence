import React, { useEffect, useRef } from "react";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import "./styles/cll.min.css";
import "./styles/style.css";
import "./styles/tedia.css";


const Rule = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  
    }
  , [])
  

  return (
    <>
    <NavBar />
      <section id="banner" class="Banner_others section_gaps">
        <div class="container">
          <div class="row d_flex">
            <div class="col-lg-6 m-auto">
              <div class="left">
                <h1>ভর্তির নিয়মাবলী</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="rules" class="section_gaps" ref={sectionRef}>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="rules_content">
                <h3>ভর্তির নিয়মাবলি</h3>
                <ul>
                  

                  {/* {rules && rules.length ? (
                    rules.map((item, i) => (
                      <li
                        class={`nextStep ${i == 0 ? "current" : ""}`}
                        data-id={item.id}
                      >
                        <b> {item.rule} </b>
                      </li>
                    ))
                  ) : (
                    <FallingLines
                      color="#4fa94d"
                      width="100"
                      visible={true}
                      ariaLabel='falling-lines-loading'
                    />
                  )} */}

<li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> ভর্তি ইচ্ছুক প্রার্থীকে ভর্তির সময় দুই কপি পাসপোর্ট সাইজ রঙিন ছবি জমা দিতে হবে ।  </b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> ভর্তি হয়ে টাকা প্রদানের রশিদ গ্রহণ করতে হবে । </b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> ৮০% ক্লাসে উপস্থিত থাকতে হবে ।  </b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> Assignment Test এ অংশগ্রহণ বাধ্যতামূলক।  অন্যথা প্রতি Assignment Test এর জন্য ১০০ টাকা জরিমানা দিতে হবে ।  </b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> পরীক্ষার হলে শৃঙ্খলার স্বার্থে কর্তৃপক্ষের নির্দেশনাবলী যথাযথভাবে মেনে চলতে হবে । </b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> ক্লাস টেস্টার জন্য কোন জরিমানা প্রযোজ্য নয়।  তবে অন্যান্য টেস্টের জন্য সর্বাধিক ১০০ টাকা ও সর্বনিম্ন ৫০ টাকা জরিমানা দিতে হবে।  শর্ত থাকে যে, পরবর্তী পরীক্ষায় ৫০% নম্বর প্রাপ্তি সাপেক্ষে জরিমানা ফেরতযোগ্য ।  </b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> শৃঙ্খলা পরিপন্থী কাজের জন্য কর্তৃপক্ষ চাইলে যে কোন সময় যে কোন শিক্ষার্থীর ভর্তি বাতিল করতে পারবে ।</b>
                      </li>

                      <li
                        // class={`nextStep ${i == 0 ? "current" : ""}`}
                        // data-id={item.id}
                      >
                        <b> প্রিলিমিনারি, লিখিত ও ভাইভা কোর্সে আলাদাভাবে ভর্তি প্রযোজ্য । </b>
                      </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Rule;
