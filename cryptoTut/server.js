import express from "express";
import crypto from "crypto";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 5000;
app.use(express.json());

const generatekeys = (algorithm) => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync(algorithm, {
    modulusLength: 2048, // length of key in bits
    publicKeyEncoding: {
      type: "spki", //subject public key info [public key cryptography standards X.509 Certificate]
      format: "pem", //Privacy-Enhanced Mail [base64 encoded DER certificate, enclosed between -----BEGIN CERTIFICATE----- and -----END CERTIFICATE-----]
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
  return { publicKey, privateKey };
};

app.post("/process", (req, res) => {
  const { algorithm, message } = req.body;
  const keys = generatekeys(algorithm);

  const privateKey = keys.privateKey;
  const publicKey = keys.publicKey;

  const encryptedMessage = crypto.publicEncrypt(
    publicKey,
    Buffer.from(message)
  );
  const decryptedMessage = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedMessage, "base64")
  );
  res.json({
    privateKey,
    publicKey,
    encryptedMessage: encryptedMessage.toString("base64"),
    decryptedMessage: decryptedMessage.toString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
