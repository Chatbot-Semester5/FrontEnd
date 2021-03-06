import { useState, useEffect } from "react";
// import Axios from "axios";
//custom hook

const useForm = (callback, validate, setSignInClicked) => {
  // Axios.defaults.withCredentials = true;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backEndErrors, setBackEndErrors] = useState("");

  const email = values.email;
  const password = values.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // if (Object.keys(errors).length === 0) {
    //   Axios.post("http://localhost:5000/customer/login", {
    //     email: email,
    //     password: password,
    //   }).then((response) => {
    //     if (!response.data.auth) {
    //       setBackEndErrors(response.data.message);
    //     } else {
    //       localStorage.setItem("token", response.data.token);
    //       setSignInClicked(true);
    //       setIsSubmitting(true);
    //     }
    //   });
    // }
  };


  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
     }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, backEndErrors };
};

export default useForm;
