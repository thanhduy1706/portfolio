import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nguyen Duy | Portfolio",
  description: "Nguyen Duy's portfolio website",
};

/**
 * RootLayout is a functional component that sets up the main HTML structure and layout for the application.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The HTML structure wrapped with necessary providers and layout components.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#7253fa49] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />

        <div className="bg-[#50d0f742] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
