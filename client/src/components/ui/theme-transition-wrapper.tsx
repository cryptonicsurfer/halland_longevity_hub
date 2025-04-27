import { useTheme } from "@/lib/theme-context";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface ThemeTransitionWrapperProps {
  children: ReactNode;
}

export function ThemeTransitionWrapper({ children }: ThemeTransitionWrapperProps) {
  const { theme } = useTheme();
  console.log("Theme in transition wrapper:", theme);

  return (
    <div className={theme}>
      {children}
    </div>
  );
}
