import { Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/store-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Fluffy HUGS NFT",
  description: "Developed by @thantzinwin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
