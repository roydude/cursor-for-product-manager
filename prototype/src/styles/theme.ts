/**
 * 메디컬 잡다 디자인 시스템
 * 브랜드 컬러, 간격, 타이포그래피 등 정의
 */

export const colors = {
  // Brand Colors (from Figma Design Tokens)
  brand: {
    primary: "#2CA4FB",
    primaryHover: "#2497F3",
    primaryLight: "#F0F9FF",
    primarySubtle: "#E6F9FF",
  },

  // Text Colors
  text: {
    default: "#333436",
    strong: "#18191B",
    subtle: "#838486",
    subtlest: "#ACAEB0",
    inverse: "#FFFFFF",
    brand: "#2497F3",
  },

  // Background Colors
  background: {
    default: "#FFFFFF",
    alternative: "#F7F7F7",
    subtle: "#F3F3F7",
    dimmer: "#18191B9C",
  },

  // Accent Colors
  accent: {
    gray: {
      subtle: "#F3F3F7",
      default: "#838486",
      strong: "#18191B",
    },
    skyblue: {
      subtle: "#F0F9FF",
    },
    red: {
      default: "#F1392C",
      subtle: "#FFF5F5",
    },
    green: {
      default: "#02C551",
    },
  },

  // Icon Colors
  icon: {
    default: "#333436",
    brand: "#2497F3",
    subtle: "#838486",
    subtlest: "#ACAEB0",
    disabled: "#D1D2D4",
    inverse: "#FFFFFF",
  },

  // Border Colors
  border: {
    default: "#DFE0E2",
    subtle: "#E9EAEB",
    strong: "#18191B",
    inverse: "#FFFFFF",
  },

  // Status Colors
  status: {
    error: "#FB4E4E",
    success: "#41AC4D",
    warning: "#F59E0B",
  },

  // Neutral Fill
  fill: {
    neutral: {
      subtle: {
        default: "#33343600",
        hover: "#3334360D",
      },
    },
  },

  // Base Colors
  white: "#FFFFFF",
  black: "#000000",
  jobdaBlack: "#121619",
} as const;

export const spacing = {
  0: "0rem", // 0px
  50: "0.25rem", // 4px
  75: "0.375rem", // 6px
  100: "0.5rem", // 8px
  125: "0.625rem", // 10px
  150: "0.75rem", // 12px
  200: "1rem", // 16px
  250: "1.25rem", // 20px
  300: "1.5rem", // 24px
  400: "2rem", // 32px
  500: "2.5rem", // 40px
  600: "3rem", // 48px
} as const;

export const borderRadius = {
  0: "0rem", // 0px
  25: "0.125rem", // 2px
  50: "0.25rem", // 4px
  75: "0.375rem", // 6px
  100: "0.5rem", // 8px
  150: "0.75rem", // 12px
  circular: "999999px", // Full circle
} as const;

export const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
} as const;

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
} as const;

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export const transition = {
  fast: "150ms ease-in-out",
  base: "200ms ease-in-out",
  slow: "300ms ease-in-out",
} as const;

export const theme = {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
  breakpoints,
  transition,
} as const;

export type Theme = typeof theme;
export default theme;
