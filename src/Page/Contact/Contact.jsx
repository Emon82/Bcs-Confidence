import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/HomeBanner";
import NavBar from "../../Component/NavBar/NavBar";
import homeimage from "../../assets/image/coverHome.jpg";
import "./Contact.css";
const MySwal = withReactContent(Swal);

export default function Contact() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      MySwal.fire(<p>Feedback submitting</p>);
    }
  }, [loading]);

  const contactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleContactSubmit = (values, actions) => {
    actions.setSubmitting(true);
    setLoading(true);
    const regPostObj = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    const regUrl = "https://feedback.bcsconfidence.net/api/send/mail/feedback";

    axios
      .post(regUrl, regPostObj)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          actions.setSubmitting(false);
          setLoading(false);

          actions.resetForm();
          MySwal.fire(<p>Feedback submitted successful</p>);
        }
      })
      .catch((error) => {
        console.log("errors", error);
        actions.setSubmitting(false);
        setLoading(false);

        if (error.response.data.message.length) {
          return MySwal.fire(<p>{error.response.data.message}</p>);
        }
      });
  };

  return (
    <div className="">
      <NavBar />
      <Banner
        image={homeimage}
        header={"BCS Confidence"}
        text={
          "BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান"
        }
        title={"Lead By: Lion Taslima Gias"}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card"
              style={{
                height: "540px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "25px",
                backgroundColor: "darkseagreen",
                fontSize: "1.2rem",
                margin: "20px",
              }}
            >
              <p>
                আমাদের সাথে যোগাযোগ করার জন্য ফর্মটি পূরণ করুন অথবা নিচে দেওয়া
                আমাদের নম্বরে যোগাযোগ করুন অথবা আমাদের ঠিকানায় এসে যোগাযোগ করুন।
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <div>
                <h1>Contact Us</h1>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validationSchema={contactSchema}
                  onSubmit={handleContactSubmit}
                >
                  {({
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <label>
                        Name:
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {touched.name && errors.name && (
                          <div style={{ color: "red" }}>{errors.name}</div>
                        )}
                      </label>
                      <label>
                        Email:
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {touched.email && errors.email && (
                          <div style={{ color: "red" }}>{errors.email}</div>
                        )}
                      </label>
                      <label>
                        Message:
                        <textarea
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                        />
                        {touched.message && errors.message && (
                          <div style={{ color: "red" }}>{errors.message}</div>
                        )}
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
