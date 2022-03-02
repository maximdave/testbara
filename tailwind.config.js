module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "authentication-image": "url('/src/assets/authenticate.svg')"
      },
      flexGrow: ["wrap"],
      colors: {
        byellow: "#FBB000",
        bhgray: "#535050",
        bgray: "#E5E5E5",
        bred: "#F64900",
        tred: "#D65912",
        bogrey: "#C4C4C4",
        blgrey: "#C2C2C2",
        mgray: "#f5f5f5",
        bfooter: "#ECE8E8",
        bgreen: "#05B171",
        borange: "#FBB000",
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      width: {
        searchd: "482px",
        "profile-list": "1024px",
        "profile-list-xl": "1280px",
      },

      height: {
        banner: "509px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
