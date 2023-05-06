const fs = require("fs/promises");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
