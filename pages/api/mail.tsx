import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.firstName}\r\n
    Last Name: ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Company Name: ${body.companyName}\r\n
    Phone: ${body.phone}\r\n
    Address: ${body.address}\r\n
    City: ${body.city}\r\n
    State: ${body.state}\r\n
    Zip Code: ${body.zipCode}\r\n
    Country: USA\r\n
    Help Message: ${body.helpMessage}\r\n
    Proyect Type: ${body.proyectType}\r\n
    Hear AboutUs: ${body.hearAboutUs}\r\n
  `;

  const data = {
    to: "miguel_gt88@hotmail.com",
    from: "hello@usasolarpro.com",
    subject: `New web form message from ${body.firstName}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
    attachments: [
      {
        content: body.file,
        filename: "document",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  //console.log(body);
  //await mail.send(data);

  res.status(200).json({ status: "OK" });
};
