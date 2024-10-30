import { FC } from "react";

import Image from "./Image";
import EmpireLogoIcon from "/assets/img/Galactic_Empire_Logo.png";

type LogoProps = {
  showLogoText?: boolean;
};

const Logo: FC<LogoProps> = ({ showLogoText = false }) => {
  return (
    <>
      <div className="logo-wrap">
        <Image className="logo" src={EmpireLogoIcon} alt="Empire Logo White" />
        {showLogoText && <h3>Join The Empire, Recruiter!</h3>}
      </div>
    </>
  );
};

export default Logo;
