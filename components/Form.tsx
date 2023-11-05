"use client";
import { FormEvent, useEffect, useRef, useState } from "react";

const Form = () => {
  const [data, setData] = useState();
  const phoneNumberRef = useRef(null);

  const handlePhoneNumberInput = () => {
    const input: any = phoneNumberRef.current;
    let value = input.value.replace(/\D/g, ""); // Remove non-digit characters
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    const data = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(formDataObject),
    }).then((res) => res.json());

    setData(data);
    form.reset();
  };
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
        required
              ref={phoneNumberRef}
              maxLength={12}
      />
      <label htmlFor="description">
        Details <span className="text-gold-10">*</span>
      </label>
      <input
        className="rounded-lg border border-black"
        name="description"
        placeholder="description"
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
