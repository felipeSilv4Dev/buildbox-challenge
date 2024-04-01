import { forwardRef } from "react";
import Photo from "../../../../../public/photo/image.svg?react";
import Trash from "../../../../../public/trash/trash.svg?react";

import * as S from "./Picture.styled";
import Image from "../../../Image/Image.component";

type PicutreProps = React.ComponentProps<"input"> & {
  error: string | undefined;
  picture: FileList | undefined;
  setValue: React.MouseEventHandler<HTMLImageElement>;
};
type RefProps = React.ForwardedRef<HTMLInputElement>;

const Picture = forwardRef(
  ({ error, picture, setValue, ...props }: PicutreProps, ref: RefProps) => {
    return (
      <S.PictureStyle>
        <label htmlFor={props.id}>
          <div className="image-selected">
            {(picture === undefined || !picture[0]) && (
              <div className="image">
                <Photo />
              </div>
            )}
            {picture && picture[0] && (
              <Image
                src={URL.createObjectURL(picture[0])}
                alt="image selected"
              />
            )}

            <div
              className="trash"
              onClick={setValue}
              style={{ opacity: picture && picture[0] ? 1 : 0 }}
            >
              <Trash />
            </div>
          </div>
        </label>
        {error && <p className="error">{error}</p>}

        <input
          ref={ref}
          style={{ display: "none" }}
          id={props.id}
          type="text"
          {...props}
        />
      </S.PictureStyle>
    );
  }
);

export default Picture;
