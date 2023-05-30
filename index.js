const contactsServises = require('./contacts');
// const argv = require("yargs").argv;
const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const сontactsList = await contactsServises.listContacts();
      console.table(сontactsList);
      break;
    case 'get':
      const oneContact = await contactsServises.getContactById(id);
      console.log(oneContact);
      break;
    case 'add':
      const newContact = await contactsServises.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    case 'remove':
      const deleteContact = await contactsServises.removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};
// invokeAction(argv);
// invokeAction({action: "list"})
// invokeAction({action: "get", id: "drsAJ4SHPYqZeG-83QTVW"})
// invokeAction({action: "add", name: "Merylin Monrou", email: "monrou@star.com", phone: "222 333-4444"})
// invokeAction({action: "remove", id: "ezZvO7gcQreJ2c5dMoSx9"})
// const {argv} = yargs(process.argv.slice(2));
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);
