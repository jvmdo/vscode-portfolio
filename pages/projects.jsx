import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h2 className={styles.title}>Projetos</h2>
      <p className={styles.paragraph}>
        Abaixo estão listados 16 projetos que selecionei dentre os que
        desenvolvi nos últimos meses. Todos os demais estão disponíveis no meu{" "}
        <a href="https://www.github.com/jvmdo">GitHub</a>.
      </p>
      <p className={styles.paragraph}>
        O aplicativo do{" "}
        <a href="https://github.com/jvmdo/ead-mg-repo">
          sistema que desenvolvi para o TCC
        </a>{" "}
        foi escrito em Flutter, por isso não o coloquei na lista.
      </p>
      <p className={styles.paragraph}>
        Este website está fora da lista pois não é de minha autoria, adaptei-o
        de{" "}
        <a href="https://github.com/itsnitinr/vscode-portfolio">
          Nitin Ranganath
        </a>{" "}
        por dois motivos: gostei muito da ideia; para que eu tivesse meu
        primeiro contato com NextJS.
      </p>
      <h3 className={styles.subtitle}>Portfolio</h3>
      <div className={styles.container}>
        {projects.map((project) => (
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
