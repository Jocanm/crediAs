import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { FacialRecognitionPhone } from "@/modules/facial-recognition/components/FacialRecognitionPhone";
import { useRef } from "react";

export const FacialRecognitionPage = () => {
  const imageInput = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <Typography size="big" className="text-center">
        Reconocimiento Facial
      </Typography>
      <FacialRecognitionPhone
        onOpenCamera={() => {
          imageInput.current?.click();
        }}
      />
      <Typography size="medium" className="flex flex-col text-center">
        <span>En la foto se debe ver</span> <span>claramente tu rostro</span>
      </Typography>
      <img src="/3.png" className="w-[100px]" />
      <Button className="px-10 w-fit">Enviar</Button>
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
