const axios = require('axios');

export async function sendEmail( senderName, senderEmail, recipientName, recipientEmail, subject, htmlContent) {
  const headers = {
    'accept': 'application/json',
    'api-key': process.env.api_key,
    'content-type': 'application/json'
  };

  const data = {
    'sender': {
      'name': senderName,
      'email': senderEmail
    },
    'to': [{
      'email': recipientEmail,
      'name': recipientName
    }],
    'subject': subject,
    'htmlContent': htmlContent
  };

  await axios.post(process.env.mail_endpoint, data, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
}

// sendEmail("VisitUttrakhand","visituttrakhand3@gmail.com","VisitUttrakhand","visituttrakhand3@gmail.com","bye","<div>Bye</div>")