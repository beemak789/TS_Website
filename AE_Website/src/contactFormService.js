import AWS from 'aws-sdk';
const ses = new AWS.SES();

const RECEIVERS = 'speechwithbrandy@gmail.com';
const SENDER = 'http://full-bloom-test.s3-website-us-east-1.amazonaws.com/';

const sendEmail = (event, done) => {
  var data = JSON.parse(event.body);

  var params = {
    Destination: {
      ToAddresses: RECEIVERS,
    },
    Message: {
      Body: {
        Text: {
          Data:
            'name: ' +
            event.name +
            '\nphoneNumber: ' +
            event.phoneNumber +
            '\nemail: ' +
            event.email +
            '\nmessage: ' +
            event.message,
          Charset: 'UTF-8',
        },
      },
      Subject: {
        Data: 'Contact Form inquiry: ' + data.name,
        Charset: 'UTF-8',
      },
    },
    Source: SENDER,
  };
  ses.sendEmail(params, done);
};

export const handler = (event, context, callback) => {
  console.log('Received event:', event);
  sendEmail(event, function (err, data) {
    var response = {
      isBase64Encoded: false,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':
          'http://full-bloom-test.s3-website-us-east-1.amazonaws.com/',
      },
      statusCode: 200,
      body: '{"result": "Success."}',
    };
    callback(err, response);
  });
};
