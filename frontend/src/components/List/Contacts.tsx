import React from 'react';
import { Contact } from '../../api/contacts';

interface ContactListProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
    onDelete: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onEdit, onDelete }) => {

    console.log("teste>>", contacts);

    return (
        <ul className="contact-list bg-green-800 w-full p-5">
            {contacts.map((contact) => (
                <li key={contact.id} className='py-1 border-b border-gray-300 flex justify-around items-center text-white font-light text-base'>
                    <span>{contact.name}</span>
                    <span>{contact.email}</span>
                    <span>{contact.phoneNumber}</span>
                    <button className='bg-yellow-300 p-3 rounded text-black' onClick={() => onEdit(contact)}>Editar</button>
                    <button className='bg-red-500 p-3 rounded text-white' onClick={() => onDelete(contact.id)}>Deletar</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
