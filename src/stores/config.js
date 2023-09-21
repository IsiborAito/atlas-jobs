import { writable } from 'svelte/store'

const config = writable({
  backendURL: "http://127.0.0.1:1337/api",
  currentUser: null,
});

export default config;