import App from './App.svelte'
// import "tailwindcss/tailwind.css"
// import './index.css'

const app = new App({
  target: document.getElementById('app'),
  hydrate: true
})

export default app
