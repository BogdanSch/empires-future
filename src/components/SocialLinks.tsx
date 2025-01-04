import { FC } from "react";

const SocialLinks: FC = () => {
  return (
    <>
      <a
        href="https://discord.gg/fJeJqCSp7Y"
        target="_blank"
        className="discord"
      >
        <i className="bi bi-discord"></i>
      </a>
      <a
        href="https://www.facebook.com/share/19ZHqtdkk9/?mibextid=LQQJ4d"
        target="_blank"
        className="facebook"
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com/bohsvity_777/"
        target="_blank"
        className="instagram"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/bohdan-shcherbak-9a0064339/"
        target="_blank"
        className="linkedin"
      >
        <i className="bi bi-linkedin"></i>
      </a>
    </>
  );
};

export default SocialLinks;
