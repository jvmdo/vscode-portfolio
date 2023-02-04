const axios = require("axios");

export default async (req, res) => {
  // It won't work.
  // This API does not allow calls from non-browser applications.
  const data = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    template_params: {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    },
  };

  const response = await axios.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  res.status(response.status).send(response.data);
};
