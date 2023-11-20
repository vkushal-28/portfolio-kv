/* eslint-disable react/no-unescaped-entities */
// components
import Circles from "../../components/Circles";
import { useForm } from "react-hook-form";
// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "all", // all, onBlur, onChange, onSubmit, onTouched
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { msg } = await res.json();
    console.log("🚀 ~ file: index.js:38 ~ onSubmit ~ msg:", msg);
  };
  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex 
      items-center justify-center h-full"
      >
        {/* text & form  */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12 ">
            Let's <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form
            className="flex-1 flex flex-col  gap-6 w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full ">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  id="name"
                  {...register("name", {
                    required: { value: true, message: "RT is required." },
                  })}
                />

                <div className="text-red-600">{errors.name?.message}</div>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  id="email"
                  {...register("email", {
                    required: { value: true, message: "Email is required." },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-z0-9]+([a-z0-9]+)*(\.[a-z0-9]+([a-z0-9]+)*)*\.[a-z]{2,4}$/g,
                      message: "Invalid email format",
                    },
                  })}
                />

                <div className="text-red-600">{errors.email?.message}</div>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="subject"
                className="input"
                id="subject"
                {...register("subject", {
                  required: { value: true, message: "Subject is required." },
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 200 characters required",
                  },
                })}
              />
              <div className="text-red-600">{errors.subject?.message}</div>
            </div>
            <div>
              <textarea
                placeholder="message"
                className="textarea"
                id="message"
                {...register("message", {
                  required: { value: true, message: "Message is required." },
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 200 characters required",
                  },
                })}
              />
              <div className="text-red-600">{errors.message?.message}</div>
            </div>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 
            transition-all duration-300 flex items-center justify-center overflow-hidden
             hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0  transition-all duration-500">
                {" "}
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
