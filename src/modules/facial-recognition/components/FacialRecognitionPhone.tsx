import React from "react";

interface Props {
  onOpenCamera: () => void;
}

export const FacialRecognitionPhone: React.FC<Props> = ({ onOpenCamera }) => {
  return (
    <div
      className="w-36 border-[0.25rem] rounded-3xl h-56 border-[#2c338b] flex flex-col items-center justify-between cursor-pointer py-2"
      onClick={onOpenCamera}
    >
      <div className="w-2/3 border-[#2c338b] rounded-3xl border-t-[0.25rem]" />
      <i className="text-7xl fa-solid fa-user text-primary"></i>
      <div className="border-[0.25rem] w-10 rounded-full border-primary h-10 grid place-content-center">
        <i className="fa-solid fa-check text-[#32bdf6] text-2xl"></i>
      </div>
    </div>
  );
};
