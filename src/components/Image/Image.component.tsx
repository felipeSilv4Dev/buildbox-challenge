import { useState } from "react";
import * as S from "./Image.styled";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  const [load, setLoad] = useState(true);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = ({
    currentTarget,
  }) => {
    if (currentTarget instanceof HTMLElement) {
      currentTarget.style.opacity = "1";
    }
    setLoad(false);
  };
  return (
    <S.ImageStyle>
      {load && <div className="skeleton"></div>}
      <img onLoad={handleLoad} src={src} alt={alt} />
    </S.ImageStyle>
  );
};

export default Image;
