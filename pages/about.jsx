import { AnimatedPieChart } from "../components/AnimatedPieChart";
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.title}>Um pouco sobre mim</h2>
      <p className={styles.paragraph}>
        Em Julho de 2022, concluí meu bacharelado em Engenharia de Computação
        pela Universidade do Estado do Amazonas (UEA). As áreas da computação
        que mais despertaram meu interesse foram inteligência artificial,
        sistemas embarcados e desenvolvimento de software. Por conta disso,
        apliquei conhecimentos dessas três disciplinas para desenvolver{" "}
        <a href="https://github.com/jvmdo/monografia-tcc" target="_blank">
          um protótipo de sistema de portaria inteligente
        </a>{" "}
        que utilizei como trabalho de conclusão. Desde formado, venho me
        especializando em desenvolvimento web.
      </p>
      <p className={styles.paragraph}>
        Minha última experiência profissional foi como desenvolvedor web
        full-stack no Instituto de Controle do Espaço Aéreo (ICEA), São José dos
        Campos - SP, onde fiz parte da equipe do projeto BR-UTM.
      </p>
      <p className={styles.paragraph}>
        O projeto BR-UTM tem como objetivo implantar UTM no espaço aéreo
        brasileiro, em uma ação conjunta entre o DECEA e empresas nacionais e
        internacionais. UTM, ou gerenciamento de tráfego de aeronaves não
        tripuladas, é um conjunto de diretrizes para controle e coordenação de
        operações de drones de forma digital e majoritariamente automatizada.
      </p>
      <p className={styles.paragraph}>
        Nesse cargo, fui responsável por desenvolver duas ferramentas web
        completas: um visualizador de espaço aéreo e um gerenciador de arquivos.
      </p>
      <p className={styles.paragraph}>
        O visualizador de espaço aéreo 2D mostra em tempo real áreas e pontos,
        significando regiões de operação, regiões de restrições e drones em
        operação com base na view do mapa e em filtros. Os dados são recuperados
        dos serviços através de HTTP e MQTT sobre Websockets.
      </p>
      <p className={styles.paragraph}>
        O gerenciador é uma ferramenta para upload de arquivos e conta com
        formulários, dashboard com gráficos, filtragem e regras de acesso. Os
        arquivos são enviados com resumable uploads. As demais trocas de dados
        são feitas por REST.
      </p>
      <p className={styles.paragraph}>
        Ambas as aplicações são impulsionadas por React.js, FastAPI e Postgres.
        Algumas das bibliotecas do ecossistema utilizadas foram: Leaflet,
        Recharts, Nuqs, Uppy, Tanstack Query/Table/Virtual e Hook Form.
      </p>
      <a
        className={styles.button}
        href="/curriculum.pdf"
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        Baixar curriculum
      </a>

      <h3 className={styles.subtitle}>Habilidades</h3>
      <div className={styles.skills}>
        <fieldset>
          <legend className={styles.legend}>
            <span>Expert</span>
            <span>Avançado</span>
            <span>Intermediário</span>
            <span>Iniciante</span>
            <span>Básico</span>
          </legend>
          <AnimatedPieChart name="JavaScript" percent={90} />
          <AnimatedPieChart name="React.js" percent={80} />
          <AnimatedPieChart name="HTML" percent={80} />
          <AnimatedPieChart name="CSS" percent={80} />
          <AnimatedPieChart name="DOM" percent={65} />
          <AnimatedPieChart name="Next.js" percent={60} />
          {/* <AnimatedPieChart name="RR Router" percent={50} /> */}
          <AnimatedPieChart name={["Tan Query", "SWR"]} percent={60} />
          {/* <AnimatedPieChart name={["Redux", "RTK"]} percent={50} /> */}
          {/* <AnimatedPieChart name="Zustand" percent={50} /> */}
          <AnimatedPieChart name="Tailwind" percent={60} />
          {/* <AnimatedPieChart name={["Jest", "Playwright"]} percent={50} /> */}
          <AnimatedPieChart name="Python" percent={90} />
          <AnimatedPieChart name="FastAPI" percent={80} />
          <AnimatedPieChart name="Pytest" percent={70} />
          <AnimatedPieChart name="Node.js" percent={50} />
          {/* <AnimatedPieChart name={["Node", "Nest.js"]} percent={50} /> */}
          <AnimatedPieChart name={["Postgres", "Mongo"]} percent={40} />
          <AnimatedPieChart name="Docker" percent={40} />
          <AnimatedPieChart name={["Git", "GitHub"]} percent={50} />
          <AnimatedPieChart name={["Figma", "Design"]} percent={15} />
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
