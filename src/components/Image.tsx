import { FC } from "react";

type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  [key: string]: any;
};

const Image: FC<ImageProps> = ({
  className = "",
  src,
  alt,
  ...rest
}: ImageProps) => {
  return <img className={`image ${className}`} src={src} alt={alt} {...rest} />;
};

export default Image;
