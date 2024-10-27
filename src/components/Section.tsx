import { FC, ReactNode } from "react";

type SectionProps = {
  sectionName: string;
  children: ReactNode;
  containerType: string;
  isDecorated?: boolean;
  [key: string]: any;
};

const Section: FC<SectionProps> = ({
  sectionName,
  children,
  containerType,
  isDecorated = false,
  ...rest
}: SectionProps) => {
  return (
    <section
      className={`${sectionName} ${isDecorated ? "section-decor-upper" : ""}`}
      {...rest}
    >
      <div className={containerType}>
        <div className={`${sectionName}__wrap`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
