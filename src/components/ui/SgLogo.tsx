import SgLogoLight from "./SgLogoLight";
import SgLogoDark from "./SgLogoDark";
import { useTheme } from "../theme-provider";
import React, { SVGProps } from "react";

export const SgLogo = (props: SVGProps<SVGSVGElement>) => {
    const { theme } = useTheme();
    const mode = theme;
    const isDark = mode === "dark";
    const Logo = isDark ? SgLogoDark : SgLogoLight;
    return <Logo {...props} />;
}