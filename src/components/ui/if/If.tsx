interface Props {
  showIf?: any;
  children?: React.ReactNode;
}

const If: React.FC<Props> = ({ children, showIf }) => {
  return showIf ? <>{children}</> : null;
};

export default If;
