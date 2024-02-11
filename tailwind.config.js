// tailwind.config.js
module.exports = {
  // other configurations...

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.js', './public/index.html'],
  },
};
