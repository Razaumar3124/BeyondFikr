import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      // Assuming db.json is served at http://localhost:3000 (or adjust the URL based on your setup)
      const response = await axios.get("http://172.20.10.13:3000/users");
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;