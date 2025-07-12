import { create } from "zustand";
import axios from "axios";
const api = import.meta.env.VITE_API_PATH

const useStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${api}/db`);
      // console.log(response.data);
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;