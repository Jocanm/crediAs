import { CrediasLogo } from "@/components/credias-logo/CrediasLogo";
import { useGetUUID } from "@/config/api/globalApi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { skipToken } from "@reduxjs/toolkit/query";

interface Props {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  const [parent] = useAutoAnimate();
  useGetUUID(
    typeof window !== "undefined" && localStorage.getItem("uuid")
      ? skipToken
      : undefined,
  );

  return (
    <div
      className="h-full overflow-y-auto w-full sm:max-w-[28.125rem] mx-auto px-5 sm:px-10 sm:rounded-2xl flex flex-col sm:gap-2 relative py-4 sm:py-8"
      ref={parent}
    >
      <CrediasLogo />
      {children}
    </div>
  );
};
