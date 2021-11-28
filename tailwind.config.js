module.exports = {
  purge: ['./index.html', './src/**/*.svelte'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'c-border': 'border-gray-300',
        'naif': 'red'
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
