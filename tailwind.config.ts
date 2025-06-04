import type { Config } from "tailwindcss";

// eslint-disable-next-line import/no-default-export
export default {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        mat: {
          DEFAULT: "var(--color-mat)",
        },
        well: {
          DEFAULT: "var(--color-well)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        active: {
          DEFAULT: "var(--color-active)",
          foreground: "var(--color-active-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        action: {
          DEFAULT: "var(--color-action)",
          foreground: "var(--color-action-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "border-slide": "border-slide 2s linear infinite",
      },
      keyframes: {
        "border-slide": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "100" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
