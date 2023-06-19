/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            white: "hsl(0, 0%, 100%)",
            orange: {
                primary: "hsl(26, 100%, 55%)",
                secondary: "hsl(25, 100%, 94%)",
            },
            blue: {
                darkBlue: "hsl(220, 13%, 13%)",
                darkGrayishBlue: "hsl(219, 9%, 45%)",
                grayishBlue: "hsl(220, 14%, 75%)",
                lightGrayishBlue: "hsl(223, 64%, 98%)",
            },
            yellow: {
                100: "#F55C46",
            },
            black: {
                lightBox: "hsl(0, 0%, 0%)",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },

    plugins: [],
};
