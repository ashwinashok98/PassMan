const crypto = require("crypto");

async function hash(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(8).toString("hex");

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}

async function verify(password, hash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":");
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString("hex"));
    });
  });
}

(async function run() {
  const password1 = await hash("123456");
  const password2 = await hash("123456");
  console.log("password1",password1, await verify("123456", password1));
  console.log("password2", await verify("123456", password2));
  console.log("password1 == password2", password1 == password2);
})();
