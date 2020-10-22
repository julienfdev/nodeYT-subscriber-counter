const config = require('../config/config');
const fetch = require('node-fetch');

const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${config.api.channel}&key=${config.api.key}`;

const getSubscriberCount = async () => {
    try {
        const responseFetch = await fetch(apiCall, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const channel = await responseFetch.json();

        return new Promise((resolve, reject) => {
            if (responseFetch.status === 200) {
                resolve(Number(channel.items[0].statistics.subscriberCount))
            } else {
                reject(channel);
            }
        });
    } catch (error) {
        console.error(error);
        return -1;
    }

}

module.exports = getSubscriberCount;