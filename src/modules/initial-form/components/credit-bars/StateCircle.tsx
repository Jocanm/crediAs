import cn from "@/utils/cn/cn";

export const StateCircle = ({
  value,
  onClick,
  className,
}: {
  value: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-xs bg-white rounded-full shadow w-7 h-7 font-bold relative",
        className,
      )}
    >
      {value}
      <div
        className="absolute bottom-[-7px] left-7 bg-black w-4 h-4 flex justify-center items-center rounded-full text-white opacity-50 cursor-pointer"
        onClick={onClick}
      >
        <span className="grid place-items-center mb-[5px]">¡</span>
      </div>
    </div>
  );
};
