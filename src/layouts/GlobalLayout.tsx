import { CrediasLogo } from "@/components/credias-logo/CrediasLogo";

interface Props {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full overflow-y-auto w-full sm:max-w-[450px] bg-[#f6f6f6] mx-auto px-5 sm:px-10 py-10 sm:rounded-2xl border border-[#c7c7c7] flex flex-col gap-2 relative">
      <CrediasLogo />
      {children}
    </div>
  );
};
