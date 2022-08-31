module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '13vh',
        main: '87vh',
      },
      colors: ({ colors }) => ({
        primary: colors.sky,
      }),
    },
  },
  plugins: [],
};
