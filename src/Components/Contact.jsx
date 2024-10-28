import axios from 'axios';
import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const addContact = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const res = await axios.post('http://localhost:3000/contact', { name, email, message });
            alert(`Form submitted by: ${name}, ${email}, ${message}`);
            console.log("Form submitted", res.data);
            // Optionally reset the form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.error(err);
            alert("There was an error submitting the form.");
        }
    }

    return (
        <div id="contact" className="h-screen flex items-center justify-center p-5">
            <form 
                className=" p-6 rounded-lg shadow-lg w-[700px]" 
                onSubmit={addContact}
            >
                <h2 className="text-3xl text-white font-bold mb-1 text-center">Contact Us</h2>
                <div className="border-2 rounded-md border-sky-700 w-20 mx-auto mt-1 mb-4"></div>
                <div className="mb-4 ">
                    <label className="block text-xl py-3 text-white " htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-xl py-3 text-white" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-xl py-3 text-white" htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="4"
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
