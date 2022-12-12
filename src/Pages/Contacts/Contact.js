import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_7a1qblf', 'template_70h2pjp', form.current, '4wPHKAqKRXef96A-N')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="contact-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 gap-3 py-10'>
                        <label>Name</label>
                        <input name="user_name" type="text" placeholder="Your  Name" className="input input-bordered w-full" />
                        <label>Email</label>
                        <input name="user_email" type="email" placeholder="Email" className="input input-bordered w-full" />
                        <label>Message</label>
                        <textarea name="message" className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                        <input type="submit" value="Submit" className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;