import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function PageWrapper({ children }: Props) {
  return (
    <div className="container mx-auto px-4 relative text-black">{children}</div>
  );
}

export default PageWrapper;
