// tailwind.config.js
module.exports = {
  // other configurations...

  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.js", "./public/index.html"],
  },
  theme: {
    colors: {
      orange_main: "#FB923C",
      dull_blue: "#9CAFAA",
      kinda_green: "#527853",
      babby_blue: "#59D5E0",
      kinda_navy: "#0C2D57",
      muted_gray: "#4B5462",
      bg_brown: "#F1F4F8",
      off_white: "#FEFAF6",
      off_white2: "#FFF7F1",
      bg_grey: "#F2F5F6",
    },
  },
};
