import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/html_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/js_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/react_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/pdf_icon.svg" filename="documents.pdf" path="/documents" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
