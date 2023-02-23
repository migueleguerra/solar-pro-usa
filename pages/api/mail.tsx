import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { setTimeout } from "timers/promises";

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
  hearAboutUs: string;
}

mail.setApiKey(process.env.SENDGRID_API_KEY || "");

const getClientEmailHtmlContent = (html = true): string => {
  return html
    ? `<div
          style="
            font-family: Verdana, sans-serif, Helvetica;
            display: flex;
            flex-direction: column;
            margin-top: 50px;
            margin-bottom: 50px;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #203456;
            padding-right: 20px;
            padding-left: 20px;
          "
        >
          <img
            src="https://raw.githubusercontent.com/migueleguerra/solar-pro-usa/main/public/solar-pro-logo.png"
            alt="solar pro logo"
            style="margin-bottom: 80px"
          />
          <div>
            <h1 style="margin: 0; padding-bottom: 5px
            ; font-size: 25px;">Message Received!</h1>
            <h2 style="margin: 0; padding-bottom: 10px; color: #f26622; font-size: 20px;">
              Thanks for choosing us
            </h2>
          </div>
          <p style="padding-bottom: 50px">
            One of our representatives will be in touch with you shortly.
          </p>
          <a
            style="
              background-color: #f26622;
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 10px;
            "
            href="https://solar-pro-usa.vercel.app/"
            >Go to website</a>
        </div>`
    : `Message Received!\r\n
       Thanks for choosing us.\r\n
       One of our Solar Pro USA representatives will be in touch with you shortly.\r\n`;
};

const getOwnerEmailHtmlContent = (
  form: string,
  formValues: FormValues
): string => {
  return form === "quickContact"
    ? `<div
        style="
          font-family: Verdana, sans-serif, Helvetica;
          justify-content: center;
          color: #203456;
        "
      >
        <div style="background-color: #f9fafb; padding: 40px">
          <h3>Quote Information:</h3>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">First Name:</p>
            <p style="color: #f26622; margin: 0">${formValues.firstName}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Last Name:</p>
            <p style="color: #f26622; margin: 0">${formValues.lastName}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Email:</p>
            <p style="color: #f26622; margin: 0">${formValues.email}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">How can we help you?</p>
            <p style="color: #f26622; margin: 0">
              ${formValues.helpMessage}
            </p>
          </div>
        </div>
      </div>`
    : `<div
        style="
          font-family: Verdana, sans-serif, Helvetica;
          justify-content: center;
          color: #203456;
        "
      >
        <div style="background-color: #f9fafb; padding: 40px">
          <h3>Quote Information:</h3>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">First Name:</p>
            <p style="color: #f26622; margin: 0">${formValues.firstName}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Last Name:</p>
            <p style="color: #f26622; margin: 0">${formValues.lastName}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Email:</p>
            <p style="color: #f26622; margin: 0">${formValues.email}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex; margin-bottom: 20px">
            <p style="margin: 0; margin-right: 2px">Phone Number</p>
            <p style="color: #f26622; margin: 0">${formValues.phone}</p>
          </div>

          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Address:</p>
            <p style="color: #f26622; margin: 0">${formValues.address}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">City:</p>
            <p style="color: #f26622; margin: 0">${formValues.city}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">State:</p>
            <p style="color: #f26622; margin: 0">${formValues.state}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex; margin-bottom: 20px">
            <p style="margin: 0; margin-right: 2px">Country:</p>
            <p style="color: #f26622; margin: 0">USA</p>
          </div>

          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">How can we help you?</p>
            <p style="color: #f26622; margin: 0">
              ${formValues.helpMessage}
            </p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Interest in financing?</p>
            <p style="color: #f26622; margin: 0">${
              formValues.financing ? "Yes" : "No"
            }</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">Proyect type:</p>
            <p style="color: #f26622; margin: 0">${formValues.proyectType}</p>
          </div>
          <div style="margin-bottom: 5px; display: flex">
            <p style="margin: 0; margin-right: 2px">How did you hear about us?</p>
            <p style="color: #f26622; margin: 0">${formValues.hearAboutUs}</p>
          </div>
        </div>
      </div>`;
};

const getOwnerEmailMessageContent = (
  form: string,
  formValues: FormValues
): string => {
  return form === "quickContact"
    ? `
      Name: ${formValues.firstName}\r\n
      Last Name: ${formValues.lastName}\r\n
      Email: ${formValues.email}\r\n
      Message: ${formValues.helpMessage}\r\n`
    : `
      Name: ${formValues.firstName}\r\n
      Last Name: ${formValues.lastName}\r\n
      Email: ${formValues.email}\r\n
      Company Name: ${formValues.companyName}\r\n
      Phone: ${formValues.phone}\r\n
      Address: ${formValues.address}\r\n
      City: ${formValues.city}\r\n
      State: ${formValues.state}\r\n
      Zip Code: ${formValues.zipCode}\r\n
      Country: USA\r\n
      Help Message: ${formValues.helpMessage}\r\n
      Proyect Type: ${formValues.proyectType}\r\n
      Hear AboutUs: ${formValues.hearAboutUs}\r\n`;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  const clientEmailData = {
    to: "miguel_gt88@hotmail.com",
    from: "no-reply@usasolarpro.com",
    subject: `New message from Solar Pro USA`,
    text: getClientEmailHtmlContent(false),
    html: getClientEmailHtmlContent(),
  };

  const ownerEmailData = {
    to: "guetop88@gmail.com",
    from: "no-reply@usasolarpro.com",
    subject: `New message from ${body.firstName}`,
    text: getOwnerEmailMessageContent(body.form, body),
    html: getOwnerEmailHtmlContent(body.form, body),
    attachments: body.file
      ? [
          {
            content: body.file,
            filename: body.fileName,
            type: body.fileType,
            disposition: "attachment",
          },
        ]
      : [],
  };

  await mail.send(clientEmailData).then(async () => {
    await setTimeout(2000);
    mail.send(ownerEmailData);
  });

  res.status(200).json({ status: "OK" });
};
