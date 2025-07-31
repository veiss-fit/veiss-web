import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

import { Poppins } from "next/font/google";
import { ConvexClientProvider } from "@/providers/ConvexProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export function generateStaticParams() {
  return [{ locale: "me" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.variable}>
      <body>
        <ConvexClientProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
          <Toaster />
        </NextIntlClientProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
