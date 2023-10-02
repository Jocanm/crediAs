import { CrediasLogo } from "@/components/credias-logo/CrediasLogo";

interface Props {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full overflow-y-auto w-full max-w-[430px] bg-[#f6f6f6] mx-auto px-7 py-10 rounded-2xl border border-[#c7c7c7] flex flex-col gap-2 relative">
      <CrediasLogo />
      {children}
    </div>
  );
};
