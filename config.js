const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6Ahw0YhT#kSuP6SOp1_CsbeAiHdrnpejIQNUzf0g0xwBfC4xWANU",
ALIVE_IMG: process.env.ALIVE_IMG || "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",
SUDO_NB: process.env.SUDO_NB || "923103278551",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: "true"
};
