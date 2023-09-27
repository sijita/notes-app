"use client";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                backgroundColor: "#101010",
                border: "1px solid #27272a",
                color: "#fff",
              },
            }}
          />
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
