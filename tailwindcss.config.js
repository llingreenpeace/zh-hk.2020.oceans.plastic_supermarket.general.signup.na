module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        notohk: [
          "Noto Sans HK",
          "Microsoft JhengHei",
          "PingFang HK",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        nototc: [
          "Noto Sans TC",
          "Microsoft JhengHei",
          "PingFang HK",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        // gp colors
        gpgreen: "#66cc00",
        gporangelight: "#ff9500",
        gporange: "#ff8100",
        gpdarkblue: "#292f47",
        // issue colors
        arctic: "#62cbd7",
        health: "#f96d8c",
        plastics: "#afaa91",
        climate: "#ffbe00",
        forests: "#00b474",
        oceans: "#008fe2"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
