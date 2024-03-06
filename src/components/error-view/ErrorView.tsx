import React from "react";
import Typography from "../ui/typography/Typography";

interface Props {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export const ErrorView: React.FC<Props> = ({ subtitle, title }) => {
  return (
    <div className="mt-20">
      <Typography className="text-3xl font-bold text-center text-secondary">
        {title}
      </Typography>
      <Typography
        className="text-center whitespace-pre-line text-primary"
        size="big"
      >
        {subtitle}
      </Typography>
    </div>
  );
};
