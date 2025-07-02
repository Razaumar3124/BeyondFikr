import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchData: async () => {
    console.log("fetchData called ✅"); // <-- Add this
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://beyondfikrdb.onrender.com/db");
      console.log("API Response:", response.data); // <-- Add this
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;