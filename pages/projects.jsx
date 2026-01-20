import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import { getProjects } from "./api/projects";

const ProjectsPage = ({ projects }) => {
  const next = projects["next"];
  const vite = projects["vite"];
  const vanilla = projects["vanilla"];

  return (
    <>
      <h2 className={styles.title}>Projetos</h2>
      <p className={styles.paragraph}>
        Projetos de destaque que desenvolvi partindo de um design (Figma ou
        PNG). Para a lista completa, veja os repositórios fixados{" "}
        <a href="https://www.github.com/jvmdo" target="_blank">
          no meu perfil do GitHub
        </a>
        .
      </p>
      <p className={styles.paragraph}>
        Todos os apps/páginas são responsivos, mobile-first workflow. A maioria
        utiliza TypeScript.
      </p>
      <h3 className={styles.subtitle}>Next.js</h3>
      <div className={styles.container}>
        {next.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h3 className={styles.subtitle}>React (Vite)</h3>
      <div className={styles.container}>
        {vite.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h3 className={styles.subtitle}>Vanilla</h3>
      <div className={styles.container}>
        {vanilla.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
