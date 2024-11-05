// src/pages/ContactsPage.tsx
import React, { useEffect, useState } from 'react';
import { getContacts, createContact, updateContact, deleteContact, Contact } from '../../api/contacts'
import ContactForm from '../../components/Form/Contacts'
import ContactList from '../../components/List/Contacts'
import { useNavigate } from 'react-router-dom';

const ContactsPage: React.FC = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            const data = await getContacts();
            setContacts(data);
        };
        fetchContacts();
    }, []);

    const handleCreateContact = async (contact: Contact) => {
        const createdContact = await createContact(contact);
        setContacts((prev) => [...prev, createdContact.contact]);
    };

    const handleUpdateContact = async (contact: Contact) => {
        const updatedContact = await updateContact(contact.id, contact);
        setContacts((prev) =>
            prev.map((c) => (c.id === contact.id ? updatedContact : c))
        );
        setEditingContact(null);
    };

    const handleDeleteContact = async (id: string) => {
        await deleteContact(id);
        setContacts((prev) => prev.filter((c) => c.id !== id));
    };

    const logoutClick = () => {
        navigate("/");
        localStorage.setItem('token', "");
    }

    return (
        <div className='p-10 bg-green-950 flex flex-col items-center justify-center min-h-screen'>
            <header className='w-full fixed bg-green-500 flex items-center justify-between px-10 top-0'>
                <h1 className='text-center font-bold text-xl top-0 py-5'>Gerenciamento de Contatos</h1>
                <p onClick={() => logoutClick()}>logout</p>
            </header>
            <ContactForm
                onSubmit={editingContact ? handleUpdateContact : handleCreateContact}
                initialData={editingContact}
                buttonText={editingContact ? 'Atualizar Contato' : 'Adicionar Contato'}
            />
            <ContactList
                contacts={contacts}
                onEdit={setEditingContact}
                onDelete={handleDeleteContact}
            />
        </div>
    );
};

export default ContactsPage;
