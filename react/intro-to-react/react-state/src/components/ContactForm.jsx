import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();

        // Make sure all fields are filled in
        if (!nameInput || !emailInput || !messageInput) {
            alert("Please fill in all fields");
            return;
        }

        // Make sure the email is in the right format
        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if (!emailRegex.test(email)) {
        //     alert("Please enter a valid email");
        //     return;
        // }

        setName(nameInput);
        setEmail(emailInput);
        setMessage(messageInput);
    };

    return (
        <>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" id="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea className="form-control" id="message" value={messageInput} onChange={(e) => setMessageInput(e.target.value)}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <p>Message: {message}</p>
        </>
    );
};

export default ContactForm;
