import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import { getProjects } from "./api/projects";

const ProjectsPage = ({ projects }) => {
  const featured = projects["featured"]?.[0];
  const next = projects["next"];
  const vite = projects["vite"];

  return (
    <>
      <h2 className={styles.title}>Projetos</h2>
      <p className={styles.paragraph}>
        Projetos pessoais que desenvolvi seguindo os seguintes critérios:
      </p>
      <ul className={styles.paragraph} style={{ marginInlineStart: "1.5rem" }}>
        <li>
          Deve partir de um design (Figma ou PNG) ou de um documento com
          especificações e requisitos
        </li>
        <li>
          Deve ser responsivo, mobile-first, pixel-perfect e respeitar
          acessibilidade
        </li>
        <li>
          Deve ter um README explicando o problema, como resolveu, o que
          aprendeu, dificuldades e demais detalhes do projeto
        </li>
      </ul>

      <h3 className={styles.subtitle}>Em destaque</h3>
      {featured && <FeaturedProject project={featured} />}

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
      <p className={styles.paragraph}>
        Lista completa disponíveis nos repositórios fixados{" "}
        <a href="https://www.github.com/jvmdo" target="_blank">
          no meu perfil do GitHub
        </a>
        .
      </p>
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
