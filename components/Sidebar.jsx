import Link from "next/link";
import { useRouter } from "next/router";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import CodeIcon from "./icons/CodeIcon";
import Certificate from "./icons/CertificateIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "../styles/Sidebar.module.css";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
    title: "Home",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
    title: "Projects",
  },
  {
    Icon: Certificate,
    path: "/documents",
    title: "Documents",
  },
  {
    Icon: MailIcon,
    path: "/contact",
    title: "Contact",
  },
  {
    Icon: GithubIcon,
    path: "/github",
    title: "Github",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
    title: "About",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
    title: "Settings",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, title }) => (
          <Link href={path} key={path}>
            <div
              title={title}
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div key={path} className={styles.iconContainer}>
            <Link href={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
