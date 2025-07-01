

const ContactPage = () => {
    return (
        <>
        <main className="main-grid text-white">
            <div className="contact-container">
            <h1 className="text-center">Contact Me</h1>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            </div>
        </main>
        </>
    );
    }

export default ContactPage;