/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: "#476C77",
                darkteal: "#303D40",
                graypurple: "#E0E2ED",
                lightorange: "#EEB072",
            },
        },
    },
    plugins: [],
};
