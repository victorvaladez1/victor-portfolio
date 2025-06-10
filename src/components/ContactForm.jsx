import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setError(true);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setSent(true);
          setError(false);
          form.current.reset();
        },
        (err) => {
          console.error('EmailJS error:', err);
          setError(true);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 max-w-md mx-auto transition-colors duration-300"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="px-4 py-2 rounded bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="px-4 py-2 rounded bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="4"
        className="px-4 py-2 rounded bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium transition-colors duration-300"
      >
        Send Message
      </button>

      {sent && (
        <p className="text-green-600 dark:text-green-400 text-sm font-medium">
          Message sent successfully!
        </p>
      )}
      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
