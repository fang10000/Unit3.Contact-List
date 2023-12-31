import React from "react";
import ContactRow from "./ContactRow";
import { useState, useEffect } from "react";

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  //   console.log("Contacts: ", contacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  //   console.log(contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List (click each row to see details)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          ))}
      </tbody>
    </table>
  );
}
