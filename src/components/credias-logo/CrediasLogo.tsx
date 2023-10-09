import Image from "next/image";
import React from "react";

export const CrediasLogo = () => {
  return (
    <div className="flex justify-center w-full" id="logo-container">
      <Image src="/credias.webp" width={191} height={64} />
    </div>
  );
};
