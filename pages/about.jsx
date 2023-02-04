import { AnimatedPieChart } from "../components/AnimatedPieChart";
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.title}>Um pouco sobre mim</h2>
      <p className={styles.paragraph}>
        Em Julho de 2022, tornei-me bacharel em Engenharia de Computação pela
        Universidade do Estado do Amazonas (UEA). Durante o curso, as áreas da
        computação que mais despertaram meu interesse foram Inteligência
        Artificial, Sistemas Embarcados e Desenvolvimento de Software. Por conta
        disso, apliquei conhecimentos desses três ramos para desenvolver um
        protótipo de sistema de portaria inteligente que utilizei como trabalho
        de conclusão.
      </p>
      <p className={styles.paragraph}>
        Após formado, decidi me especializar em desenvolvimento web, com foco no
        frontend, o qual estou dedicado a aprender, praticar e desenvolver todos
        os dias. Sigo este <a href="https://roadmap.sh/frontend">roadmap</a>{" "}
        para focar nas tecnologias mais utilizadas na comunidade e no mercado.
        Atualmente, estou matriculado no{" "}
        <a href="https://lp.rocketseat.com.br/ignite?&&_gl=1*2jnxzn*_ga*MzIzNTA3Mzk0LjE2NzE0NzQzNTc.*_ga_74RKNGM8RL*MTY3NTQ2OTIxMi43LjAuMTY3NTQ2OTIxMi42MC4wLjA.#sobre">
          Rocketseat Ignite.
        </a>
      </p>
      <p className={styles.paragraph}>
        Nas minhas experiências profissionais, tive a oportunidade de trabalhar
        com as 3 áreas citadas acima. Mais detalhes no meu curriculum.
      </p>
      <a
        className={styles.button}
        href="JoaoOliveira-CV.pdf"
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        Baixar curriculum
      </a>
      <h3 className={styles.subtitle}>Habilidades</h3>
      <p className={styles.paragraph}>
        Estou focado em linguagens e tecnologias atuais voltadas ao
        desenvolvimento frontend, adquirindo mais conhecimentos sobre elas a
        cada novo projeto.
      </p>
      <div className={styles.skills}>
        <fieldset>
          <legend className={styles.legend}>
            <span>Básico</span>
            <span>Iniciante</span>
            <span>Intermediário</span>
            <span>Avançado</span>
            <span>Expert</span>
          </legend>
          <AnimatedPieChart name="HTML" percent={85} />
          <AnimatedPieChart name="CSS" percent={80} />
          <AnimatedPieChart name="JavaScript" percent={80} />
          <AnimatedPieChart name="DOM" percent={60} />
          <AnimatedPieChart name="ReactJS" percent={45} />
          <AnimatedPieChart name="Bootstrap" percent={40} />
          <AnimatedPieChart name="Figma/Design" percent={15} />
          <AnimatedPieChart name="Git/GitHub" percent={30} />
          <AnimatedPieChart name="Node" percent={25} />
          <AnimatedPieChart name="Express" percent={10} />
          <AnimatedPieChart name="MongoDB" percent={10} />
          <AnimatedPieChart name="Python" percent={50} />
          <AnimatedPieChart name="C/C++" percent={30} />
          <AnimatedPieChart name="Dart/Flutter" percent={50} />
          <AnimatedPieChart name="Vontade" percent={100} />
        </fieldset>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
