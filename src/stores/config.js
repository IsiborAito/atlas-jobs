import { writable } from 'svelte/store'

const config = writable({
  backendURL: "https://futureskills.foodbev.co.za/backend/api/",
  currentUser: null,
});

export default config;