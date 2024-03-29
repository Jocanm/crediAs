import { CrediasLogo } from "@/components/credias-logo/CrediasLogo";
import { useGetUUID } from "@/hooks/useGetUUID";
import { useScrollToTop } from "@/hooks/utils/useScrollToTop";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  useGetUUID();
  useScrollToTop();
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      className="h-full overflow-y-auto w-full sm:max-w-[28.125rem] mx-auto px-5 sm:px-10 sm:rounded-2xl flex flex-col sm:gap-2 relative py-4 sm:py-8"
    >
      <CrediasLogo />
      {children}
    </div>
  );
};
