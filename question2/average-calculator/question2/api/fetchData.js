const axios = require("axios");
require("dotenv").config();

const fetchNumbers = async (type) => {
    try {
        const response = await axios.get(`${process.env.THIRD_PARTY_API}/numbers/${type}`, { timeout: 500 });
        return response.data.numbers || [];
    } catch (error) {
        console.log(`Error fetching numbers: ${error.message}`);
        return [];
    }
};

module.exports = { fetchNumbers };
