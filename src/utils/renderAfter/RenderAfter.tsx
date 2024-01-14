import { type ReactNode, useEffect, useState } from "react";

interface Props {
  delay: number;
  children: ReactNode;
}

export const RenderAfter: React.FC<Props> = ({ delay, children }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, [ready]);

  return ready ? <>{children}</> : null;
};
