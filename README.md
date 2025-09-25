🔐 RSA Crypto Playground

A simple Node.js + Express application that demonstrates RSA encryption and decryption using Node’s built-in crypto module.

Users can provide custom input and get back its encrypted or decrypted output using generated RSA key pairs.

🚀 Features

Generate RSA public/private key pairs

Encrypt text using the public key

Decrypt text using the private key

Lightweight Express API

📂 Project Structure
rsa-crypto-playground/
│── server.js          # Main entry point (Express server)
│── package.json       # Dependencies and scripts

🛠️ Installation

Clone the repository:

git clone https://github.com/your-username/rsa-crypto-playground.git
cd rsa-crypto-playground


Install dependencies:

npm install


Start the server:

npm start


Server runs at:
👉 http://localhost:5000

📡 API Usage
🔑 Encrypt Text

POST /encrypt

{
  "text": "HelloWorld"
}


✅ Response:

{
  "encrypted": "MIGfMA0GCSqGSIb3DQEBA..."
}

🔓 Decrypt Text

POST /decrypt

{
  "encrypted": "MIGfMA0GCSqGSIb3DQEBA..."
}


✅ Response:

{
  "decrypted": "HelloWorld"
}

⚙️ How It Works

On startup, the app generates a 2048-bit RSA key pair (public & private keys).

The public key is used to encrypt data.

The private key is used to decrypt the encrypted data.

🧑‍💻 Tech Stack

Node.js

Express.js

Crypto

📄 License

MIT License
