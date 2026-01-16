import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setError(true);
      setSent(false);
      setIsSending(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setSent(true);
        setError(false);
        setIsSending(false);
        form.current.reset();
      },
      (err) => {
        console.error("EmailJS error:", err);
        setError(true);
        setSent(false);
        setIsSending(false);
      }
    );
  };

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-sm bg-white/60 dark:bg-white/5 backdrop-blur " +
    "border border-black/10 dark:border-white/10 " +
    "text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 " +
    "focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition";

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-md mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6 flex flex-col gap-4"
    >
      <div className="text-left">
        <h3 className="text-lg font-semibold tracking-tight">Send a message</h3>
        <p className="text-sm opacity-70 mt-1">
          I’ll get back to you as soon as I can.
        </p>
      </div>

      <input
        type="text"
        name="user_name"
        placeholder="Name"
        required
        className={inputBase}
      />

      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        className={inputBase}
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        rows="5"
        className={`${inputBase} resize-none`}
      />

      <button
        type="submit"
        disabled={isSending}
        className="rounded-xl px-4 py-3 text-sm font-medium
                   bg-black text-white hover:opacity-90
                   dark:bg-white dark:text-black dark:hover:opacity-90
                   transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSending ? "Sending..." : "Send"}
      </button>

      {sent && (
        <div className="text-sm rounded-xl border border-black/10 dark:border-white/10 px-4 py-3 opacity-80">
          ✅ Message sent.
        </div>
      )}

      {error && (
        <div className="text-sm rounded-xl border border-black/10 dark:border-white/10 px-4 py-3 opacity-80">
          ❌ Something went wrong. Try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
