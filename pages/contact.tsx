import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form";
import FormLoading from "../components/FormLoading";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  helpMessage: string;
  financing: boolean;
  proyectType: string;
  file: any;
  fileName: string;
  fileType: string;
  hearAboutUs: string;
  form: string;
}

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData: FormValues) => {
    setLoading(true);
    formData.form = "fullContact";

    if (formData.file[0]) {
      formData.fileName = formData.file[0].name;
      formData.fileType = formData.file[0].type;
      await toBase64(formData.file[0])
        .then((x) => (formData.file = x))
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    } else {
      formData.file = false;
    }

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setLoading(false);
        reset();
        if (!res.ok) {
          return router.push("/errorform");
        }
        router.push("/successform");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        reset();
        router.push("/errorform");
      });
  };

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve((reader.result || "").toString().replace(/^data:(.*,)?/, ""));
      };
      reader.onerror = (error) => reject(error);
    });

  return (
    <section className="contact-wave bg-no-repeat bg-cover bg-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col primary-font-color mx-auto max-w-2xl space-y-4 bg-white sm:shadow-lg mb-[20rem] translate-y-[10rem] sm:p-[4rem] pt-[2rem] px-2"
      >
        <h3 className="text-3xl font-bold text-center">Let's work together</h3>
        <p className="text-center pb-[2rem] px-4 sm:px-0">
          We'd love to hear from you!
        </p>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
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
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
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

          {/* Company Name */}

          <div className="flex flex-col">
            <label className="text-sm font-bold">Company Name</label>
            <input
              {...register("companyName")}
              className="border py-1 px-2 rounded-md"
            />
          </div>
        </div>

        {/* Phone */}

        <div className="flex flex-col px-8 sm:px-0">
          <label className={`text-sm font-bold`}>Phone Number</label>
          <PhoneInput
            defaultCountry="US"
            initialValueFormat="national"
            name="phone"
            control={control}
            className={`border py-1 px-2 rounded-md sm:w-[13.5rem] primary-font-color`}
          />
        </div>

        {/* Address */}

        <div className="flex flex-col px-8 sm:px-0">
          <label className={`text-sm font-bold`}>Address</label>
          <input
            {...register("address")}
            className={`border py-1 px-2 rounded-md`}
          />
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* City */}

          <div className="flex flex-col">
            <label className={`text-sm font-bold`}>City</label>
            <input
              {...register("city")}
              className={`border py-1 px-2 rounded-md`}
            />
          </div>

          {/* State */}

          <div className="flex flex-col">
            <label className={`text-sm font-bold`}>State</label>
            <select
              {...register("state")}
              className={`py-1 px-2 border rounded-md sm:w-[13.5rem]`}
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
          </div>
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* Zip Code */}

          <div className="flex flex-col">
            <label className={`text-sm font-bold`}>Zip Code</label>
            <input
              {...register("zipCode")}
              className={`border py-1 px-2 rounded-md sm:w-55`}
            />
          </div>

          {/* Country */}

          <div className="flex flex-col">
            <label className="text-sm font-bold">Country</label>
            <input
              {...register("country")}
              className="border py-1 px-2 rounded-md sm:w-55"
              defaultValue="USA"
              disabled
            />
          </div>
        </div>

        {/* How can we help you? */}

        <div className="flex flex-col px-8 sm:px-0">
          <label className="text-sm font-bold">How can we help you?</label>
          <textarea
            {...register("helpMessage")}
            className="border h-[5rem] p-2 rounded-md"
          />
        </div>

        {/* Financing? */}

        <div className="flex space-x-2 px-8 sm:px-0">
          <label className="text-sm font-bold">
            Are you interested in financing?
          </label>
          <input
            {...register("financing")}
            type="checkbox"
            className="w-4 h-4"
          />
        </div>

        <div className="flex flex-col sm:flex-row px-8 sm:px-0 gap-4 sm:justify-between">
          {/* Proyect type */}

          <div className="space-y-2">
            <label className="text-sm font-bold">Proyect type*</label>
            <div className="flex items-center space-x-2">
              <input
                {...register("proyectType", { required: true })}
                value="Solar Only"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Solar Only</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                {...register("proyectType", { required: true })}
                value="Storage and Solar"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Storage and Solar</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                {...register("proyectType", { required: true })}
                value="Roofing and Solar"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Roofing and Solar</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                {...register("proyectType", { required: true })}
                value="Roofing"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Roofing</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                {...register("proyectType", { required: true })}
                value="Storage"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Storage</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                {...register("proyectType", { required: true })}
                value="Other"
                className="w-4 h-4"
                type="checkbox"
              />
              <label className="text-sm">Other</label>
            </div>
            {errors.proyectType?.type === "required" && (
              <span className="text-xs text-red-600">
                select at least one option.
              </span>
            )}
          </div>
        </div>

        <div className="px-8 sm:px-0 flex flex-col space-y-2">
          <label className="text-sm font-bold">
            Drop your electricity bill (png, jpeg or pdf)
          </label>
          <input
            {...register("file")}
            type="file"
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
            defaultValue=""
          >
            <option disabled value="">
              -- select an option --
            </option>
            <option value="Google">Google</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Blog Post">Blog Post</option>
            <option value="In-Person Event">In-Person Events</option>
            <option value="Other">other</option>
          </select>
        </div>

        <div className="flex justify-center transform transition duration-200 hover:scale-110 pt-4">
          <button className="secondary-bg-color text-white py-2 w-full rounded-md shadow-md mx-8 sm:mx-0">
            Submit
          </button>
        </div>
      </form>

      {loading ? <FormLoading /> : null}
    </section>
  );
};

export default Contact;
