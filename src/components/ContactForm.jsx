import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
      .then(
        () => {
          setSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setError(true);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="px-4 py-2 rounded bg-gray-800 text-white"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="px-4 py-2 rounded bg-gray-800 text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="4"
        className="px-4 py-2 rounded bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
      >
        Send Message
      </button>

      {sent && <p className="text-green-400">Message sent successfully!</p>}
      {error && <p className="text-red-400">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;