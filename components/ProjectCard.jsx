import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const BADGE_ICONS = {
  "typescript": "/stack/typescript.svg",
  "a11y": "♿"
};

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.badges && project.badges.length > 0 && (
        <div className={styles.badgesContainer}>
          {project.badges.map(badge => {
            const icon = BADGE_ICONS[badge];
            if (!icon) return null;
            if (icon === "♿") {
              return (
                <span key={badge} className={styles.badgeEmoji} title={badge}>
                  {icon}
                </span>
              );
            }
            return (
              <img
                key={badge}
                src={icon}
                alt={badge}
                title={badge}
                className={styles.badgeImg}
              />
            );
          })}
        </div>
      )}
      <a
        href={project.demo ?? project.source_code}
        target="_blank"
        title="Ir para demo"
      >
        <Image
          src={project.image}
          height={300}
          width={600}
          objectFit="cover"
          objectPosition="top"
          alt={project.name}
        />
      </a>
      <div className={styles.content}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              {project.type ? "Reference" : "Source Code"}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
