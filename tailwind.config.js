/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
    ],
    theme: {
        extend: {
        colors: {
            bgGray: '#EFEFEF',
            textBlack: '#333333',
        },
        fontFamily: {
            proxima: ['"Proxima Nova"', 'sans-serif'],
        },
        },
    },
    plugins: [],
}
