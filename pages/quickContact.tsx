import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormLoading from "../components/FormLoading";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  helpMessage: string;
  form: string;
}

function quickContact() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (formData: FormValues) => {
    setLoading(true);
    formData.form = "quickContact";

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        reset();
        setLoading(false);
        if (!res.ok) {
          return router.push("/errorform");
        }
        router.push("/successform");
      })
      .catch((err) => {
        reset();
        setLoading(false);
        console.error(err);
        router.push("/errorform");
      });
  };

  return (
    <section className="contact-wave bg-no-repeat bg-cover bg-center primary-font-color h-screen">
      <div className="translate-y-[10rem] flex flex-col max-w-2xl mx-auto bg-white shadow-md sm:p-[4rem] p-[2rem]">
        <h3 className="text-3xl font-bold text-center">Let's work together</h3>
        <p className="text-center pb-[2rem] px-4 sm:px-0">
          We'd love to hear from you!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {/* First Name */}

          <div className="flex flex-col">
            <label className={`text-sm font-bold`}>First Name*</label>
            <input
              {...register("firstName", { required: true })}
              className={`border py-1 px-2 rounded-md ${
                errors.firstName?.type === "required" &&
                "focus:outline-none border-red-600"
              }`}
            />
            {errors.firstName?.type === "required" && (
              <span className="text-xs text-red-600">
                first name is required.
              </span>
            )}
          </div>

          {/* Last Name */}

          <div className="flex flex-col">
            <label className={`text-sm font-bold`}>Last Name*</label>
            <input
              {...register("lastName", { required: true })}
              className={`border py-1 px-2 rounded-md ${
                errors.lastName?.type === "required" &&
                "focus:outline-none border-red-600"
              }`}
            />
            {errors.lastName?.type === "required" && (
              <span className="text-xs text-red-600">
                last name is required.
              </span>
            )}
          </div>

          {/* Email */}

          <div className="flex flex-col">
            <label className={`text-sm font-bold`}>Email*</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              className={`border py-1 px-2 rounded-md ${
                (errors.email?.type === "required" ||
                  errors.email?.type === "pattern") &&
                "focus:outline-none border-red-600"
              }`}
            />
            {errors.email?.type === "required" && (
              <span className="text-xs text-red-600">email is required.</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-xs text-red-600">enter a valid email.</span>
            )}
          </div>

          {/* How can we help you? */}

          <div className="flex flex-col">
            <label className="text-sm font-bold">How can we help you?</label>
            <textarea
              {...register("helpMessage")}
              className="border h-[5rem] p-2 rounded-md"
            />
          </div>

          <button className="py-2 secondary-bg-color text-white rounded-md shadow-md transform transition duration-200 hover:scale-110">
            Submit
          </button>
        </form>
      </div>

      {loading ? <FormLoading /> : null}
    </section>
  );
}

export default quickContact;
