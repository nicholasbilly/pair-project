const crypto = require('crypto');

function hashing(password) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let secret = ''
    for(let i = 0; i < 10; i++) {
        let random = alphabet[Math.floor(Math.random() * 26)]
        secret += random
    }

    
    const hash = crypto.createHmac('sha256', secret)
    .update(password)
    .digest('hex');
    return hash
}

module.exports = hashing