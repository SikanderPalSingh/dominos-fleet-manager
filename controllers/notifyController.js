
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendText = async (req, res) => {
  const { to, message } = req.body;
  try {
    const msg = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to
    });
    res.status(200).json({ success: true, sid: msg.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.makeCall = async (req, res) => {
  const { to } = req.body;
  try {
    const call = await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      from: process.env.TWILIO_PHONE_NUMBER,
      to
    });
    res.status(200).json({ success: true, sid: call.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
