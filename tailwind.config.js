/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xxs: "220px", // Exemplo de breakpoint personalizado para telas pequenas
        xs: "360px", // Exemplo de breakpoint personalizado para telas pequenas
        sm: "640px", // Padrão para telas pequenas
        md: "768px", // Padrão para telas médias
        lg: "1024px", // Padrão para telas grandes
        xl: "1280px", // Padrão para telas extra grandes
      },
    },
  },
  plugins: [],
};
