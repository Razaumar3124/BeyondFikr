import { create } from "zustand";
import axios from "axios";
import gsap from "gsap";
const api = import.meta.env.VITE_API_PATH

const useStore = create((set) => ({

  //Data fetching Part Start

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

  //Data fetching Part End

  //login validation Start

  logEmail: "".toLowerCase(),
  logPassword: "",
  logEmailError: "",
  logPasswordError: "",

  setLogEmail: (logEmail) => set({ logEmail }),
  setLogPassword: (logPassword) => set({ logPassword }),

  setLogEmailError: (msg) => set({ logEmailError: msg }),
  setLogPasswordError: (msg) => set({ logPasswordError: msg }),

  rememberMe: false,
  setRememberMe: (val) => set({ rememberMe: val }),

  validate: ()=>{
    let isValid = true;
    set((state)=>{
      const updates = {};

      if (!state.logEmail){
        updates.logEmailError = "Email is required";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.logEmail)){
        updates.logEmailError = "Enter a valid email";
        isValid = false;
      } else {
        updates.logEmailError = "";
      }

      if (!state.logPassword){
        updates.logPasswordError = "Password is required";
        isValid = false;
      } else if (state.logPassword.length < 8 || state.logPassword.length > 16){
        updates.logPasswordError = "Password must be between 8 to 16 characters";
        isValid = false;
      } else {
        updates.logPasswordError = "";
      }

      return updates;
    });

    return isValid;
  },


  //login validation End

  //Animation code Start
  
  sideAnimation: (leftAnimateRef, x, y ) => {
    const el = leftAnimateRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, x: x , y: y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  },

  //Animation code End
}));

  

export default useStore;