module.exports = {
  purge: ['./index.html', './src/*.svelte', './src/**/*.svelte', './src/**/**/*.svelte'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'c-border': 'border-gray-300',
      },
    },
  },
  variants: {
    extend: {
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
