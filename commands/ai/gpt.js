const axios = require('axios');

module.exports = async function ({ dstryr, event, parameters }) {
  try {
  if (parameters.length === 0) {
            dstryr.sendMessage('𝖺𝗇𝗈 𝖻𝖺 𝗒𝗎𝗇 𝗅𝗈𝗏𝖾? 𝗆𝖺𝗀𝗌𝖾𝖺𝗋𝖼𝗁 𝗄𝖺', event.threadID);
            return;
        }
        
    const apiUrl = 'https://openai-rest-api.vercel.app/hercai?model=v3&ask=' + encodeURIComponent(parameters.join(' '));

    
    const response = await axios.get(apiUrl);

    
    const apiResponse = response.data.reply;

    
    dstryr.sendMessage(apiResponse, event.threadID);
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('Error🙄', event.threadID);
  }
};
