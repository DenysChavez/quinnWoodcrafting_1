"use client";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

import { FormEvent, useEffect, useRef, useState } from "react";


const Form = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const phoneNumberRef = useRef(null);



  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    try {
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      // Reset the form
      form.reset();

      // Show success message or redirect to a thank you page
      console.log("Email Sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    } finally {
      toast.success("Request Submitted Successfully!");
      setShowConfetti(true);
    }
  };

  const handlePhoneNumberInput = () => {
    const input: any = phoneNumberRef.current;
     // Remove non-digit characters
    let value = input.value.replace(/\D/g, "");
    if (value.length > 3 && value.length <= 6) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 6) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
    }
    input.value = value;
  };

  useEffect(() => {
    const input: any = phoneNumberRef.current;
    input.addEventListener("input", handlePhoneNumberInput);
    return () => {
      input.removeEventListener("input", handlePhoneNumberInput);
    };
  }, []);


  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:w-1/2">
        <label htmlFor="name">
          Name <span className="text-gold-10">*</span>
        </label>
        <input
          className="border border-black rounded-lg"
          name="name"
          placeholder=" Name"
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
          placeholder=" Email"
          required
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="border border-black rounded-lg"
          name="phoneNumber"
          placeholder=" 123-456-7890"
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
          placeholder=" Details"
          required
        />
        <p>
          <span className="text-gold-10">*</span> Require Infomation
        </p>
        <button className="rounded-lg bg-black py-2 text-white">Submit</button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </>
  );
};

export default Form;
