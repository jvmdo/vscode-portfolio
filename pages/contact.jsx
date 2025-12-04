import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import { sendForm } from "emailjs-com";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm(event) {
    event.preventDefault();

    const res = await sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      event.currentTarget,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    /* const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    }); */

    if (res.status === 200) {
      alert("Sua mensagem foi enviada 😀 Obrigado!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("Falha no serviço de mensagens 😨 Mensagem não enviada 😢");
      console.log(res);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Contate-me pelas redes</h3>
        <ContactCode />
      </div>
      {/* <div>
        <h3 className={styles.heading}>Ou me envie uma mensagem daqui mesmo</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
