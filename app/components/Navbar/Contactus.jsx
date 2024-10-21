"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from 'axios';
import Link from "next/link";

const Contactusform = ({ isOpenForm }) => {
  let [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: ""
  });

  const [emailError, setEmailError] = useState(""); // For email validation

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues(prevState => ({ ...prevState, [name]: value }));

    // Email validation check
    if (name === "input2") {
      const emailValid = validateEmail(value);
      setEmailError(emailValid ? "" : "Please enter a valid email address");
    }
  };

  const validateEmail = email => {
    // Regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    // Submit function when Book Now button is clicked
    alert(
      `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
    );

    try {
      const response = await axios.get('/api/send-email', {
        params: {
          name: inputValues.input1,
          email: inputValues.input2,
          text: inputValues.input3
        }
      });
      console.log("Response from backend: ", response.data);
      alert('Message sent successfully!');
      setInputValues({
        input1: "",
        input2: "",
        input3: ""
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  const isDisabled =
    Object.values(inputValues).some(value => value === "") || emailError;

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end text-xl w-full font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white"
            onClick={openModal}
          >
            Book Now
          </button>
        </div>{
          isOpenForm && (<>
            <div className="block lg:hidden">
              <button
                type="button"
                className="text-black hover:bg-gray-700 hover:text-purple block py-2 rounded-md text-base font-medium"
                onClick={openModal}
              >
                Book Now
              </button>
            </div>
          </>)
        }

      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}  // Close button
                    className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    &times; {/* Close icon */}
                  </button>

                  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <img src="/images/logo/logo.png" alt="" className="w-[350px]" />
                    </div>
                    <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      Contact us now? Want to send us a feedback?
                    </p>

                    <div className="space-y-8">
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="text"
                          name="input1"
                          value={inputValues.input1}
                          onChange={handleChange}
                          type="text"
                          required
                          className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Name..."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Email
                        </label>
                        <input
                          id="email"
                          name="input2"
                          value={inputValues.input2}
                          onChange={handleChange}
                          type="email"
                          required
                          className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="xyz@email.com"
                        />
                        {emailError && (
                          <p className="mt-1 text-sm text-red-600">{emailError}</p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="input3"
                          value={inputValues.input3}
                          onChange={handleChange}
                          className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Leave a message..."
                        ></textarea>
                      </div>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        className="relative py-3 px-5 text-xl font-medium w-full text-center text-black rounded-full hover:scale-105 bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 border border-transparent bg-clip-padding hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-50 transition duration-300 ease-in-out"
                        style={{
                          background: "linear-gradient(to right, blue, pink, purple)",
                          backgroundClip: "padding-box",
                          WebkitBackgroundClip: "padding-box",
                          border: "2px solid transparent",
                          borderRadius: "9999px",
                          padding: "3px", // Creates space between the gradient and inner white background
                        }}
                      >
                        <span className="block bg-white rounded-full w-full h-full p-3 transition-colors duration-300 ease-in-out">
                          Book Now
                        </span>
                      </button>

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
