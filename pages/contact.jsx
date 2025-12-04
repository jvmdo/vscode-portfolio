import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const res = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      event.currentTarget,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    );

    if (res.status === 200) {
      alert("Sua mensagem foi enviada 😀 Obrigado!");
      setFields({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Falha no serviço de email 😨 Mensagem não enviada 😢");
      console.log(res);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Contate-me pelas redes</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Ou me envie um email daqui mesmo</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={fields.name}
                onChange={(e) => setFields({ ...fields, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={fields.email}
                onChange={(e) =>
                  setFields({ ...fields, email: e.target.value })
                }
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
              value={fields.subject}
              onChange={(e) =>
                setFields({ ...fields, subject: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={fields.message}
              onChange={(e) =>
                setFields({ ...fields, message: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div>
            <button disabled={isLoading}>Submit</button>
            {isLoading && <span>Enviando...</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
