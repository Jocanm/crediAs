import { CrediasLogo } from "@/components/credias-logo/CrediasLogo";

interface Props {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full overflow-y-auto w-full sm:max-w-[450px] mx-auto px-5 sm:px-10 sm:rounded-2xl flex flex-col gap-2 relative py-8">
      <CrediasLogo />
      {children}
    </div>
  );
};
