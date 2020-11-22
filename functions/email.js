const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const {
    name, email, phone, address, city, state, callTime, mortgage, description, repairs
  } = JSON.parse(event.body);

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'realpropertyinvesting101@gmail.com',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  });

  const html = `
    <h2>You've been contacted</h2>
    <h3>Contact Details</h3>
    <ul style="padding: 0">
      <li>Name: ${name} </li>
      <li>Email: ${email} </li>
      <li>Phone Number: ${phone} </li>
      <li>Address: ${address} </li>
      <li>City: ${city} </li>
      <li>State: ${state} </li>
      <li>Call Time: ${callTime} </li>
      <li>Mortgage: ${mortgage} </li>
      <li>Description: ${description} </li>
      <li>Repairs: ${repairs} </li>
    </ul>
  `;

  transport.sendMail({
    from: 'yourmom.com',
    to: ['realpropertyinvesting101@gmail.com'],
    subject: 'Real Property Investing Contact',
    html,
  }, (error) => {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: 'Ok',
      });
    }
  });
};