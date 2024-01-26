/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,vue,ts}"],
    theme: {
        extend: {
            maxWidth: {
                mw: "1650px",
            },
            colors: {
                background: "#F8EFEA",
                'festive-dark': '#3A211C',
                'festive-light': '#F8EFEA',
                'festive-primary': '#D9822F',
                'festive-secondary': '#D95F2F',
                'festive-info': '#2F8FD9',
                'festive-warning': '#D9B32F',
                'festive-success': '#2FD94B',
                'festive-danger': '#D92F2F',
            },
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
    },
};
