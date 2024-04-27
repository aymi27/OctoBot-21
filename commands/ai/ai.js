const axios = require('axios');

module.exports = async function ({ dstryr, event, parameters }) {
  try {
  if (parameters.length === 0) {
            dstryr.sendMessage('𝖺𝗇𝗈 𝖻𝖺 𝗂𝗍𝖺𝗍𝖺𝗇𝗈𝗇𝗀 𝗆𝗈 𝗅𝗈𝗏𝖾?', event.threadID);
            return;
        }
        
    const apiUrl = 'https://api.kenliejugarap.com/ai/?text=' + encodeURIComponent(parameters.join(' '));

    
    const response = await axios.get(apiUrl);

    
    const apiResponse = response.data.response;

    
    dstryr.sendMessage(apiResponse, event.threadID);
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('Error🙄', event.threadID);
  }
};
