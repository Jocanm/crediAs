import { CrediasLogo } from "@/components/credias-logo/CrediasLogo";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  const [parent] = useAutoAnimate();
  return (
    <div
      className="h-full overflow-y-auto w-full sm:max-w-[450px] mx-auto px-5 sm:px-10 sm:rounded-2xl flex flex-col gap-2 relative py-8"
      ref={parent}
    >
      <CrediasLogo />
      {children}
    </div>
  );
};
