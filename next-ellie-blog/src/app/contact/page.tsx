"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    subject: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <form
      className="flex flex-col items-center gap-5 rounded-lg pt-20"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold">Contact me</h1>
      <FaGithub />

      <p>sungchul09@naver.com</p>
      <h2 className="text-lg font-bold">send me an email</h2>
      <div className="bg-gray-400 w-[800px] rounded-lg">
        <div className="flex flex-col gap-2 p-5">
          <label htmlFor="email">your email</label>
          <input
            type="text"
            id="email"
            className="text-[20px] rounded-lg h-[40px]"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="text-[20px] rounded-lg h-[40px]"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <label htmlFor="subject">message</label>
          <textarea
            className="text-[20px] h-[300px] rounded-lg"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="bg-yellow-300 rounded-2xl pt-2 pb-2 pl-10 pr-10 text-[20px]">
        submit
      </button>
    </form>
  );
}
