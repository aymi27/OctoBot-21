const axios = require('axios');
const fs = require('fs');

module.exports = async function ({ dstryr, event, parameters }) {
  try {
    
    const ownerInfo = `
      〘🍥〙Owner: 𝗬𝗢𝗬𝗔
      〘🍥〙FB: https://www.facebook.com/100095262681590
      〘🍥〙FbPage: https://www.facebook.com/leechshares
    `;

    dstryr.sendMessage(ownerInfo, event.threadID);
     
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('An error occurred while processing your request.', event.threadID);
  }
};
