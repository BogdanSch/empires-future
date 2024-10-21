import { FC, useState, useRef, MouseEvent } from "react";
import { NullableImage } from "../../types/html-nullables";

type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  zoomFactor?: number;
  zoomBoxSize?: number;
};

const ZoomImage: FC<ImageProps> = ({
  className = "",
  src,
  alt,
  zoomFactor = 2,
  zoomBoxSize = 100,
}: ImageProps) => {
  const [zoomPosition, setZoomPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const imageRef = useRef<NullableImage>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
      setZoomPosition({ x: mouseX, y: mouseY });
    } else {
      setZoomPosition(null);
    }
  };

  const handleMouseLeave = () => {
    setZoomPosition(null);
  };

  return (
    <div
      className={`${className} zoom-image-container`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} ref={imageRef} alt={alt} />
      {zoomPosition && (
        <div
          className="zoom-box"
          style={{
            top: zoomPosition.y - zoomBoxSize / 2,
            left: zoomPosition.x - zoomBoxSize / 2,
            width: `${zoomBoxSize}px`,
            height: `${zoomBoxSize}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imageRef.current!.width * zoomFactor}px ${
              imageRef.current!.height * zoomFactor
            }px`,
            backgroundPosition: `-${
              zoomPosition.x * zoomFactor - zoomBoxSize / 2
            }px -${zoomPosition.y * zoomFactor - zoomBoxSize / 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
