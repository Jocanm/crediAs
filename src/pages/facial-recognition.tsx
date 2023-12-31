import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { FacialRecognitionPhone } from "@/modules/facial-recognition/components/FacialRecognitionPhone";
import { useRouter } from "next/router";
import { useRef } from "react";

export const FacialRecognitionPage = () => {
  const router = useRouter();
  const imageInput = useRef<HTMLInputElement>(null);

  const onValidate = () => {
    void router.replace(RouteName.CONGRATS);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Typography size="big" className="font-semibold text-center">
        Reconocimiento Facial
      </Typography>
      <Typography size="medium" className="flex flex-col text-center">
        <span>Puedes cargar una foto de tu cara</span>{" "}
        <span>haciendo click en el logo.</span>
      </Typography>
      <FacialRecognitionPhone
        onOpenCamera={() => {
          imageInput.current?.click();
        }}
      />
      <Typography size="medium" className="flex flex-col text-center">
        <span>En la foto se debe ver</span>{" "}
        <span className="-mt-2">claramente tu rostro.</span>
      </Typography>
      <img src="/05.webp" className="w-32 ml-10" />
      <Button className="px-10 w-fit" onClick={onValidate}>
        Enviar
      </Button>
      <input
        type="file"
        capture="user"
        accept="image/*"
        ref={imageInput}
        className="hidden"
      />
    </div>
  );
};

FacialRecognitionPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default FacialRecognitionPage;
