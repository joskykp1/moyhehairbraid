/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#c46800",
                secondary: "#BC15C2",
                accent: "#ffab91",
                cream: "#F9F9F9",
                dark: "#1A1A1A",
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
