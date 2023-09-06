import WebLayoutWrapper from "./components/Layout/layout";

export const metadata = {
  title: "Status Fitness",
  description: "Description",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <WebLayoutWrapper>
      <main>{children}</main>
    </WebLayoutWrapper>
  );
}
