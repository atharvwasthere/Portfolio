import { useTheme } from "../theme-provider";


export const VitLogo = () => {
  const { theme, resolvedTheme } = useTheme();
  const mode = resolvedTheme ?? theme;        // actual mode
  const isDark = mode === "dark";
  const source = isDark ? './VIT-white.svg' : './VIT-black.svg';

  return <img src={source} alt="VIT Logo" />;
};
