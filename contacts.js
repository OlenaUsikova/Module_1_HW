const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, './db/contacts.json');
// const contactsPath= path.resolve("./db/contacts.json");

const updateContacts = async contacts =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
const getContactById = async contactId => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  return result || null;
};
const removeContact = async (contactId, data) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { contactId, ...data };
  await updateContacts(contacts);
  return contacts[index];
};
const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...data };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
