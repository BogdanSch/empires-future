import { FC, ReactNode } from "react";

type SectionProps = {
  sectionName: string;
  children: ReactNode;
  containerType: string;
  [key: string]: any;
};

const Section: FC<SectionProps> = ({
  sectionName,
  children,
  containerType,
  ...rest
}: SectionProps) => {
  return (
    <section className={sectionName} {...rest}>
      <div className={containerType}>
        <div className={`${sectionName}__wrap`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
