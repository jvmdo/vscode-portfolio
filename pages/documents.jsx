import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import { getDocuments } from "./api/documents";

function DocumentsPage({ documents }) {
  const web = documents.filter(({ type }) => type === "web");
  const mobile = documents.filter(({ type }) => type === "mobile");
  const english = documents.filter(({ type }) => type === "english");
  const others = documents.filter(({ type }) => type === "others");

  return (
    <section>
      <h2 className={styles.title}>Documentos</h2>
      <p className={styles.paragraph}>
        Meus certificados e documentos mais relevantes.
      </p>

      <article>
        <h3 className={styles.subtitle}>Web Development</h3>
        <div className={styles.container}>
          {web.map((doc) => (
            <ProjectCard key={doc.id} project={doc} />
          ))}
        </div>
      </article>

      <article>
        <h3 className={styles.subtitle}>Mobile Development</h3>
        <div className={styles.container}>
          {mobile.map((doc) => (
            <ProjectCard key={doc.id} project={doc} />
          ))}
        </div>
      </article>

      <article>
        <h3 className={styles.subtitle}>English</h3>
        <div className={styles.container}>
          {english.map((doc) => (
            <ProjectCard key={doc.id} project={doc} />
          ))}
        </div>
      </article>

      <article>
        <h3 className={styles.subtitle}>Others</h3>
        <div className={styles.container}>
          {others.map((doc) => (
            <ProjectCard key={doc.id} project={doc} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default DocumentsPage;

export async function getStaticProps() {
  const documents = getDocuments();

  return {
    props: { title: "Currículo e Certificados", documents },
  };
}
