const contactsServises = require("./contacts")
// const argv = require("yargs").argv;

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contactsServises.listContacts();
      console.log(listContacts);
      break;

    case "get":
        const oneContact = await contactsServises.getContactById(id);
        console.log(oneContact);
      break;

    case "add":
        const newContact = await contactsServises.addContact({name, email, phone});
        console.log(newContact);
      break;

    case "remove":
        const removeContact = await contactsServises.removeContact(id, {name, email, phone});
        console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction(argv);
// invokeAction({action: "list"})
// invokeAction({action: "get", id: "drsAJ4SHPYqZeG-83QTVW"})
// invokeAction({action: "add", name: "Merylin Monrou", email: "monrou@star.com", phone: "(222) 333-4444"})
