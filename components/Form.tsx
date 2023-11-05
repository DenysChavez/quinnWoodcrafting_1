"use client";
import { validationSchema } from "@/utils/validation";
import { Formik } from "formik";

// import { ToastContainer, toast } from "react-toastify";
// import Confetti from "react-confetti";

import { FormEvent, useEffect, useRef, useState } from "react";

type FormValue = {
  name: string;
  email: string;
  phoneNumber?: string;
  details: string;
};

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState();
  const phoneNumberRef = useRef(null);
  // const [erro, setError] = useState([]);

  // const sendData = async (formData: FormData) => {
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      console.log(formDataObject);
      form.reset();
      
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    }
  };
  // const handlePhoneNumberInput = () => {
  //   const input: any = phoneNumberRef.current;
  //    // Remove non-digit characters
  //   let value = input.value.replace(/\D/g, "");
  //   if (value.length > 3 && value.length <= 6) {
  //     value = value.slice(0, 3) + "-" + value.slice(3);
  //   } else if (value.length > 6) {
  //     value =
  //       value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
  //   }
  //   input.value = value;
  // };

  // useEffect(() => {
  //   const input: any = phoneNumberRef.current;
  //   input.addEventListener("input", handlePhoneNumberInput);
  //   return () => {
  //     input.removeEventListener("input", handlePhoneNumberInput);
  //   };
  // }, []);

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   const formData = new FormData(form);
  //   const formDataObject = Object.fromEntries(formData);

  // const res = await fetch("api/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(formDataObject),
  // });

  // console.log(res);
  // const { msg } = await res.json();
  // setError(msg);
  // console.log(erro);

  // setData(data);
  // form.reset();
  // };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:w-1/2">
      <label htmlFor="name">
        Name <span className="text-gold-10">*</span>
      </label>
      <input
        className="border border-black rounded-lg"
        name="name"
        placeholder="name"
        autoComplete="off"
        required
      />
      <label htmlFor="email">
        Email <span className="text-gold-10">*</span>
      </label>
      <input
        minLength={5}
        maxLength={30}
        type="email"
        className="rounded-lg border border-black"
        name="email"
        placeholder="email"
        required
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className="border border-black rounded-lg"
        name="phoneNumber"
        placeholder="Phone Number: 123-456-7890"
        autoComplete="off"
        ref={phoneNumberRef}
        maxLength={12}
      />
      <label htmlFor="details">
        Details <span className="text-gold-10">*</span>
      </label>
      <textarea
        className="rounded-lg border border-black"
        rows={4}
        minLength={10}
        maxLength={500}
        name="details"
        placeholder="details"
        required
      />
      <p>
        <span className="text-gold-10">*</span> Require Infomation
      </p>
      <button className="rounded-lg bg-black py-2 text-white">Submit</button>
    </form>
  );
};

export default Form;
