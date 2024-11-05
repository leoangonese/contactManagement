import React, { useState, useEffect } from 'react';
import { Contact } from '../../api/contacts';

interface ContactFormProps {
    onSubmit: (contact: Contact) => void;
    initialData?: Contact | null;
    buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialData, buttonText }) => {
    const [contact, setContact] = useState<Contact>({ id: '', name: '', email: '', phoneNumber: '' });

    useEffect(() => {
        if (initialData) {
            setContact(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(contact);
        setContact({ id: '', name: '', email: '', phoneNumber: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="w-1/2 contact-form py-2 flex items-center justify-center flex-col">
            <input
                className="w-full h-[50px] text-lg rounded-xl focus:outline-none py-[20px] px-[13px] shadow-md shadow-[#00000020] mt-2"
                type="text"
                name="id"
                placeholder="ID"
                value={contact.id}
                onChange={handleChange}
                required
            />
            <input
                className="w-full h-[50px] text-lg rounded-xl focus:outline-none py-[20px] px-[13px] shadow-md shadow-[#00000020] mt-2"

                type="text"
                name="name"
                placeholder="Nome"
                value={contact.name}
                onChange={handleChange}
                required
            />
            <input
                className="w-full h-[50px] text-lg rounded-xl focus:outline-none py-[20px] px-[13px] shadow-md shadow-[#00000020] mt-2"
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
                required
            />
            <input
                className="w-full h-[50px] text-lg rounded-xl focus:outline-none py-[20px] px-[13px] shadow-md shadow-[#00000020] mt-2"
                type="text"
                name="phoneNumber"
                placeholder="Telefone"
                value={contact.phoneNumber}
                onChange={handleChange}
                required
            />
            <button className='w-full h-[50px] rounded-2xl bg-green-800 hover:bg-green-950 duration-300 mt-6 shadow-md shadow-[#00000020] flex justify-center items-center text-white font-bold text-3xl' type="submit">{buttonText}</button>
        </form>
    );
};

export default ContactForm;
