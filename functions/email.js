const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const {
    name, email, phone, address, city, state, callTime, mortgage, description, repairs, pageName
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
      <li style="list-style: none;">Name: ${name} </li>
      <li style="list-style: none;">Email: ${email} </li>
      <li style="list-style: none;">Phone Number: ${phone} </li>
      <li style="list-style: none;">Address: ${address} </li>
      <li style="list-style: none;">City: ${city} </li>
      <li style="list-style: none;">State: ${state} </li>
      <li style="list-style: none;">Call Time: ${callTime} </li>
      <li style="list-style: none;">Mortgage: $ ${mortgage} </li>
      <li style="list-style: none;">Description: ${description} </li>
      <li style="list-style: none;">Repairs: ${repairs} </li>
    </ul>
  `;

  transport.sendMail({
    from: 'potentialclient',
    to: ['realpropertyinvesting101@gmail.com'],
    subject: `${pageName.toUpperCase()} - Real Property Investing Contact`,
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