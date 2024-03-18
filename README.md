# Annef

Annef is a Node.js module providing various cryptographic utility functions.

## Installation

You can install Annef using npm: `npm install annef`

## Usage

```javascript
const cryptoUtils = require('crypto-utils');

// Generate a random string
const randomString = cryptoUtils.generateRandomString(10);
console.log('Random String:', randomString);

// Hash a string using SHA-256
const hashedString = cryptoUtils.sha256Hash('hello world');
console.log('SHA-256 Hash:', hashedString);

// Generate HMAC
const hmac = cryptoUtils.generateHMAC('secret_key', 'data_to_hash');
console.log('HMAC:', hmac);

// Fetch data from URL and hash it
cryptoUtils.fetchAndHash('https://example.com')
  .then(hash => console.log('Hash of fetched data:', hash))
  .catch(error => console.error('Error:', error.message));
```

