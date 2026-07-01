import styles from "../styles/FeaturedProject.module.css";

const TAG_ICONS = {
  TypeScript: "/stack/typescript.svg",
  "React.js": "/stack/react.svg",
  "Next.js": "/stack/nextjs.svg",
  "Better Auth": "/stack/better-auth.svg",
  "Tanstack Query": "/stack/tanstack-query.svg",
  nuqs: "/stack/nuqs.svg",
  Zustand: "/stack/zustand.svg",
  "Hook Form": "/stack/hook-form.svg",
  TailwindCSS: "/stack/tailwindcss.svg",
  shadcn: "/stack/shadcn.svg",
  Resend: "/stack/resend.svg",
  Zod: "/stack/zod.svg",
  "Drizzle ORM": "/stack/drizzle-orm.svg",
  "Testing Library": "/stack/testing-library.svg",
  Vitest: "/stack/vitest.svg",
  Playwright: "/stack/playwright.svg",
  MSW: "/stack/msw.svg",
  PGLite: "/stack/pglite.svg",
  PostgreSQL: "/stack/postgresql.svg",
  Neon: "/stack/neon.svg",
  "CI/CD": "/stack/github.svg",
  "Trigger.dev": "/stack/trigger-dev.svg",
  "Antigravity CLI": "/stack/antigravity-cli.svg",
  "Ark UI": "/stack/ark-ui.svg",
};

const FeaturedProject = ({ project }) => {
  return (
    <div className={styles.featuredContainer}>
      <header className={styles.header}>
        <h4 className={styles.title}>{project.name}</h4>
        <div className={styles.actions}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Ver Demo
            </a>
          )}
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Código Fonte
            </a>
          )}
        </div>
      </header>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.detailsWrapper}>
        <div className={styles.imageFloat}>
          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageWrapper}
          >
            <div className={styles.browserBar}>
              <span
                className={styles.dot}
                style={{ backgroundColor: "#ff5f56" }}
              ></span>
              <span
                className={styles.dot}
                style={{ backgroundColor: "#ffbd2e" }}
              ></span>
              <span
                className={styles.dot}
                style={{ backgroundColor: "#27c93f" }}
              ></span>
            </div>
            <img
              src={project.image}
              alt={project.name}
              className={styles.image}
            />
          </a>
        </div>
        <ul
          className={styles.details}
          dangerouslySetInnerHTML={{ __html: project.details }}
        />
      </div>

      <div className={styles.techStackBox}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            <div className={styles.tagsGroup}>
              {project.tags.map((tag, index) => (
                <span key={`set1-${tag}-${index}`} className={styles.tag}>
                  {TAG_ICONS[tag] && (
                    <img
                      src={TAG_ICONS[tag]}
                      alt=""
                      aria-hidden="true"
                      className={styles.tagIcon}
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.tagsGroup}>
              {project.tags.map((tag, index) => (
                <span key={`set2-${tag}-${index}`} className={styles.tag}>
                  {TAG_ICONS[tag] && (
                    <img
                      src={TAG_ICONS[tag]}
                      alt=""
                      aria-hidden="true"
                      className={styles.tagIcon}
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
