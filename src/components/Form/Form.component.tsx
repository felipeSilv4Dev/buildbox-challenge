import * as S from "./Form.styled";
import Picture from "./form-components/Picture/Picture.component";
import Button from "./form-components/Button/Button.component";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const createCardSchema = z.object({
  picture: z.instanceof(FileList).refine((file) => file[0], {
    message: "Você precisa selecionar uma imagem",
  }),
  name: z.string().refine((n) => n.length >= 2, {
    message: "Preencha este campo com no minímo 2 caracter",
  }),
  description: z.string().refine((m) => m.length >= 6, {
    message: "Preencha este campo com no minímo 6 caracter",
  }),
});

type createCardProps = z.infer<typeof createCardSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<createCardProps>({
    resolver: zodResolver(createCardSchema),
  });
  const [valid, setValid] = useState(isValid);
  const { ref, onChange, onBlur, name } = register("picture");
  const pictureInput = watch("picture");

  const createCard = (data: createCardProps) => {
    emptyInputs();
  };

  const emptyPicture: React.MouseEventHandler = (e) => {
    e.preventDefault();

    if (pictureInput) {
      setValue("picture", pictureInput);
      setValid(false);
    }
  };

  const emptyInputs = () => {
    setValue("picture", pictureInput);
    setValue("name", "");
    setValid(false);
    setValue("description", "");
  };

  useEffect(() => {
    setValid(isValid);
  }, [isValid]);

  return (
    <S.FormContainer onSubmit={handleSubmit(createCard)}>
      <Picture
        id="picture"
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        picture={pictureInput}
        type="file"
        accept=".jpg,.png"
        setValue={emptyPicture}
        error={errors.picture?.message}
      />

      <div>
        <input
          className="name"
          type="text"
          {...register("name")}
          placeholder="Digite seu nome"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <textarea
          className="message"
          {...register("description")}
          placeholder="Menssagem"
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}
      </div>

      <div className="btn">
        <span className="empty" onClick={emptyInputs}>
          descartar
        </span>

        <Button valid={!valid}>Publicar</Button>
      </div>
    </S.FormContainer>
  );
};

export default Form;
