import { DevLinkProvider } from "@/devlink/devlinkContext";
import { Footer } from "@/devlink/Footer";
import "@/devlink/global.css";
import { Header } from "@/devlink/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </DevLinkProvider>
      </body>
    </html>
  );
}
