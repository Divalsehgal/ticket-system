import Nav from "./(components)/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket System",
  description: "Creating a functional ticketing system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)]">
          <Nav />
          <main className="flex-grow overflow-y-auto px-4 py-6 md:px-8 bg-[var(--bg)] text-[var(--text)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
