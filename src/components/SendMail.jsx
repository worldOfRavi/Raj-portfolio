import { IoCloseCircleOutline } from "react-icons/io5";
import { useMailContext } from "../store/mailContext";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser } from "react-icons/fa";


const SendMail = () => {
  const { setClicked } = useMailContext();
  const templatId = import.meta.env.VITE_TEMPLETE_ID;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const publicID = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templatId, form.current, {
        publicKey: publicID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  

  return (
    <div className="xs:w-[100%] md:w-2/4 fixed xs:left-0 top-1/4  md:left-1/4  border-2 border-purple-700 opacity-1 bg-neutral-800 rounded ">
      <div className="p-8 mb-3">
        <div className="w-full flex justify-end">
          <IoCloseCircleOutline
            className="text-xl hover:text-purple-700 transition-all duration-250 delay-100 cursor-pointer"
            onClick={() => setClicked(false)}
          />
        </div>
        <p>
          Dear <span className="text-purple-700 text-semibold">Rajendra,</span>
        </p>
        <div>
          <form ref={form} onSubmit={sendEmail}>
          <label className="input input-bordered flex items-center gap-2 my-3">
              <FaUser />
              <input type="text" className="grow text-gray-200" placeholder="Name" name="user_name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow text-gray-200" placeholder="Email" name="user_email" />
            </label>
            <textarea
              placeholder="Message"
              name="message"
              className="textarea textarea-bordered textarea-md w-full text-gray-200 mt-3"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-500 w-full my-3 rounded py-2 hover:text-gray-900 hover:border hover:border-purple-500 hover:bg-white transition-all duration-150 delay-150"
            >
              Send mail
            </button>
          </form>
        </div>
      </div> 
    </div>
  );
};

export default SendMail;
