const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

// const invokeAction = async ({action, id, name,email,phone}) => {
//     switch (action) {
//         case 'read':
//             const allContacts = await contacts.getAll();
//             return console.log(allContacts);
// case "getById":
// const oneContact = await contacts.getContactById(contactId);
// return console.log(oneContact);
//     }
// }
// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" })

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
    const data = fs.readFile(contactsPath);
  return JSON.parse(data);
}

function getContactById(contactId) {
  // ...твій код
    const contacts = listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    return result || null;
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports {
    listContacts,
        getContactById,
        removeContact,
        addContact
}