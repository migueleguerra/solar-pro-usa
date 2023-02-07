// @ts-ignore

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  companyName?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  message?: string;
  typeOfRoof: string;
  typeOfService: string;
  file?: HTMLInputElement;
  hearAboutUs?: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="contact-wave bg-no-repeat bg-cover bg-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col primary-font-color mx-auto max-w-2xl space-y-4 bg-white sm:shadow-lg mb-[20rem] translate-y-[10rem] sm:p-[4rem] pt-[2rem] px-2"
      >
        <h3 className="text-3xl font-bold text-center">Let's work together</h3>
        <p className="text-center px-4 sm:px-0">
          We'd love to hear from you! Send us a message using the form, or email
          us.
        </p>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* First Name */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${
                errors.firstName && "text-red-600"
              }`}
            >
              First Name*
            </label>
            <input
              {...register("firstName", {
                required: true,
              })}
              className={`border py-1 px-2 rounded-md ${
                errors.firstName && "border-red-600 focus:outline-none"
              }`}
            />
            {errors.firstName?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>

          {/* Last Name */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${
                errors.lastName && "text-red-600"
              }`}
            >
              Last Name*
            </label>
            <input
              {...register("lastName", { required: true })}
              className={`border py-1 px-2 rounded-md ${
                errors.lastName && "border-red-600 focus:outline-none"
              }`}
            />
            {errors.lastName?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* Email */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${errors.email && "text-red-600"}`}
            >
              Email*
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              className={`border py-1 px-2 rounded-md ${
                errors.email && "border-red-600 focus:outline-none"
              }`}
            />
            {errors.email?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-xs text-red-600 pt-1">
                enter a valid email
              </span>
            )}
          </div>

          {/* Company Name */}

          <div className="flex flex-col">
            <label className="text-sm font-bold">Company Name</label>
            <input
              {...register("companyName")}
              className="border py-1 px-2 rounded-md"
            />
          </div>
        </div>

        {/* Address */}

        <div className="px-8 sm:px-0">
          <label
            className={`text-sm font-bold ${errors.address && "text-red-600"}`}
          >
            Address*
          </label>
          <input
            {...register("address", { required: true })}
            className={`border py-1 px-2 rounded-md w-full ${
              errors.address && "border-red-600 focus:outline-none"
            }`}
          />
          {errors.address?.type === "required" && (
            <span className="text-xs text-red-600 pt-1">
              This field is required
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* City */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${errors.city && "text-red-600"}`}
            >
              City*
            </label>
            <input
              {...register("city", { required: true })}
              className={`border py-1 px-2 rounded-md ${
                errors.city && "border-red-600 focus:outline-none"
              }`}
            />
            {errors.city?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>

          {/* State */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${errors.state && "text-red-600"}`}
            >
              State*
            </label>
            <select
              {...register("state", { required: true })}
              className={`py-1 px-2 border rounded-md sm:w-[13.5rem] ${
                errors.state && "border-red-600 focus:outline-none"
              }`}
              defaultValue=""
            >
              <option disabled value="">
                -- select an option --
              </option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
            {errors.state?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* Zip Code */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${
                errors.zipCode && "text-red-600"
              }`}
            >
              Zip Code*
            </label>
            <input
              {...register("zipCode", { required: true })}
              className={`border py-1 px-2 rounded-md sm:w-55 ${
                errors.zipCode && "border-red-600 focus:outline-none"
              }`}
            />
            {errors.zipCode?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>

          {/* Country */}

          <div className="flex flex-col">
            <label className="text-sm font-bold">Country</label>
            <input
              {...register("country")}
              className="border py-1 px-2 rounded-md sm:w-55"
              placeholder="USA"
              value="USA"
              disabled
            />
          </div>
        </div>

        {/* How can we help you? */}

        <div className="flex flex-col px-8 sm:px-0">
          <label className="text-sm font-bold">How can we help you?</label>
          <textarea
            {...register("message")}
            className="border py-4 px-2 rounded-md"
          />
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* Type of Roof */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${
                errors.typeOfRoof && "text-red-600"
              }`}
            >
              Type of Roof*
            </label>
            <select
              {...register("typeOfRoof", { required: true })}
              className={`py-1 px-2 border rounded-md sm:w-[13.5rem] ${
                errors.typeOfRoof && "border-red-600 focus:outline-none"
              }`}
              defaultValue=""
            >
              <option disabled value="">
                -- select an option --
              </option>
              <option value="A">Type-A</option>
              <option value="B">Type-B</option>
              <option value="C">Type-C</option>
              <option value="other">Other</option>
            </select>
            {errors.typeOfRoof?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>

          {/* Begin Project */}

          <div className="flex flex-col">
            <label className="text-sm font-bold">Begin Project*</label>
            <input name="begin" className="border py-1 px-2 rounded-md" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* Proyect type */}

          <div className="space-y-2">
            <label className="text-sm font-bold">Proyect type*</label>
            <div className="flex items-center space-x-2">
              <input
                name="checkbox-solar"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Solar Only</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                name="checkbox-storage&solar"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Storage and Solar</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                name="checkbox-roofing&solar"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Roofing and Solar</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                name="checkbox-roofing"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Roofing</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                name="checkbox-storage"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Storage</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                name="checkbox-other"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Other</label>
            </div>
          </div>

          {/* Type of Service */}

          <div className="flex flex-col">
            <label
              className={`text-sm font-bold ${
                errors.typeOfService && "text-red-600"
              }`}
            >
              Type of Service*
            </label>
            <select
              {...register("typeOfService", { required: true })}
              className={`py-1 px-2 border rounded-md sm:w-[13.5rem] ${
                errors.typeOfService && "border-red-600 focus:outline-none"
              }`}
              defaultValue=""
            >
              <option disabled value="">
                -- select an option --
              </option>
              <option value="Residential">Residential</option>
              <option value="Comercial">Comercial</option>
              <option value="Maintenance">Maintenance</option>
              <option value="other">Other</option>
            </select>
            {errors.typeOfService?.type === "required" && (
              <span className="text-xs text-red-600 pt-1">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="px-8 sm:px-0 flex flex-col space-y-2">
          <label className="text-sm font-bold">
            Drop your electricity bill (png, jpeg or pdf)
          </label>
          <input
            type="file"
            {...register("file")}
            className="
            file:px-8 file:py-2
            file:bg-[#203456]
            file:border-none
            file:rounded-lg
            file:text-white
            file:sm:mr-[1rem]
            file:cursor-pointer
            file:transform
            file:transition
            file:duration-200
            file:hover:scale-105
            file:grid
            file:sm:inline

            p-[1rem] border-dashed border-2 rounded-md
          "
          />
        </div>

        <div className="px-8 sm:px-0 flex flex-col">
          <label className="text-sm font-bold">
            How did you hear about us?
          </label>
          <select
            {...register("hearAboutUs")}
            id="type-of-service"
            className="py-1 px-2 border rounded-md"
            defaultValue="default"
          >
            <option disabled value="default">
              -- select an option --
            </option>
            <option value="google">Google</option>
            <option value="word of mouth">Word of Mouth</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="blog post">Blog Post</option>
            <option value="in person event">In-Person Events</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="flex justify-center transform transition duration-200 hover:scale-110 pt-4">
          <button className="secondary-bg-color text-white py-2 w-full rounded-md shadow-md mx-8 sm:mx-0">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
