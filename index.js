// cryptoUtils.js

const crypto = require('crypto');
const axios = require('axios');

// Function to generate a random string of specified length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to hash a given string using SHA-256 algorithm
function sha256Hash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}

// Function to generate HMAC (Hash-based Message Authentication Code)
function generateHMAC(key, data) {
  return crypto.createHmac('sha256', key).update(data).digest('hex');
}

// Function to fetch data from a URL and hash it
async function fetchAndHash(url) {
  try {
    const response = await axios.get(url);
    return sha256Hash(response.data);
  } catch (error) {
    throw new Error(`Failed to fetch and hash data from ${url}: ${error.message}`);
  }
}

module.exports = {
  generateRandomString,
  sha256Hash,
  generateHMAC,
  fetchAndHash
};
