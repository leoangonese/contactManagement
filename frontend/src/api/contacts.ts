import { api } from './axios';

export interface Contact {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}

export const getContacts = async (): Promise<Contact[]> => {
    const token = localStorage.getItem('token');
    const response = await api.get('/contacts', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const createContact = async (contact: Contact): Promise<{ message: string; contact: Contact }> => {
    const token = localStorage.getItem('token');
    const response = await api.post('/contacts', contact, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const updateContact = async (id: string, contact: Contact): Promise<Contact> => {
    const token = localStorage.getItem('token');

    const response = await api.put(`/contacts/${id}`, {name: contact.name, email: contact.email, phoneNumber: contact.phoneNumber}, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const deleteContact = async (id: string): Promise<void> => {
    const token = localStorage.getItem('token');
    await api.delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
