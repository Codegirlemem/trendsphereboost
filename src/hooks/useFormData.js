import { useEffect, useState } from "react";
import axios from "axios";

export function useFormData(inputValue, validateForm) {
  const [formData, setFormData] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  // useEffect(function () {
  //   console.log("useeffect ran");
  //   if (Object.keys(formData).length) {
  //     async function submitForm() {
  //       setIsLoading(true);
  //       try {
  //         const response = await axios.post(
  //           "https://jsonplaceholder.typicode.com/posts",
  //           formData
  //         );
  //         setIsLoading(false);
  //         console.log(response);

  //         if (response.status === 201) {
  //           setSubmitStatus(true);
  //           setTimeout(() => {
  //             setSubmitStatus(false);
  //           }, 2000);
  //         }
  //       } catch (err) {
  //         console.error(err.message);
  //         setSubmitError(err.message);
  //       } finally {
  //       }
  //     }
  //     submitForm();

  //     return setFormData((values) => ({
  //       ...values,
  //       name: "",
  //       email: "",
  //       password: "",
  //     }));
  //   }
  // }, []);

  function handleForm(event) {
    event.preventDefault();
    console.log(inputValue.userName.length);

    if (validateForm()) {
      setFormData({
        ...formData,
        name: inputValue.userName?.trim(),
        email: inputValue.userEmail?.trim(),
        password: inputValue.userPassword?.trim(),
      });
      console.log(formData);

      if (Object.keys(formData).length) {
        async function submitForm() {
          setIsLoading(true);
          try {
            const response = await axios.post(
              "https://jsonplaceholder.typicode.com/posts",
              formData
            );
            setIsLoading(false);
            console.log(response);

            if (response.status === 201) {
              setSubmitStatus(true);
              setTimeout(() => {
                setSubmitStatus(false);
              }, 2000);
            }
          } catch (err) {
            console.error(err.message);
            setSubmitError(err.message);
          } finally {
          }
        }
        submitForm();
        // setFormData((values) => ({
        //   ...values,
        //   userName: "",
        //   userEmail: "",
        //   userPassword: "",
        //   confirmedPassword: "",
        //   checkbox: isChecked,
        // }));

        setFormData((values) => ({
          ...values,
          name: "",
          email: "",
          password: "",
        }));

        // navigate("/login");
      }

      console.log(isLoading);
    } else {
      // alert("user input not valid");
      console.log("form has errors");
    }
  }
  return [formData, submitError, isLoading, handleForm, submitStatus];
}
