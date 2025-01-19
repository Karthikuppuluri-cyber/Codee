import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";


export const metadata = {
  title: "Codiee-Full Stack Web App Development",
  description: "Codiee Full stack Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
      >
        <ConvexClientProvider>
        <Provider>
         {children}
         <Toaster />
        </Provider>
        </ConvexClientProvider>
       
      </body>
    </html>
  );
}
