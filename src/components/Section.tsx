import { FC, ReactNode } from "react";

type SectionProps = {
  sectionName: string;
  children: ReactNode;
  containerType: string;
};

const Section: FC<SectionProps> = ({
  sectionName,
  children,
  containerType,
}: SectionProps) => {
  return (
    <section className={sectionName}>
      <div className={containerType}>
        <div className={`${sectionName}__wrap`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
