import { create } from "zustand";
import axios from "axios";
import gsap from "gsap";
import { toast } from "react-toastify";
const api = import.meta.env.VITE_API_PATH


const useStore = create((set, get) => ({

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
        updates.logEmailError = "Invalid email format";
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

  //Signup validation Start

  email: "",
  mobile: "",
  password: "",
  isAdmin: false,
  date: Date.now(),
  agree: false,

  errors: {
    email: "",
    mobile: "",
    password: "",
    isAdmin: false,
    agree: false,  
  },

  setEmail: (value) => set({ email: value }),
  setMobile: (value) => set({ mobile: value }),
  setPassword: (value) => set({ password: value }),
  setIsAdmin: (value) => set({ isAdmin: value }),
  setAgree: (value) => set({ agree: value }),

  setErrors: (errors) => set({ errors }),

  signupValidate: () => {
    const {email, mobile, password, agree } = get();
    const errors = { email: "", mobile: "", password: "", isAdmin: "", agree: "" };
    let isValid = true;

    if (!email){
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!mobile){
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(mobile)){
      errors.mobile = "Mobile number must be 10 digits";
      isValid = false;
    }

    if (!password){
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length <= 8 || password.length >= 16){
      errors.password = "Password must be between 8 to 16 characters";
      isValid = false;
    }

    if (!agree){
      errors.agree = "* mandatory to accept the Terms & conditions";
      isValid = false;
    }

    set({ errors });
    return isValid;
  },

  submit: async (navigate) => {
    const isValid = get().signupValidate();
    if (!isValid) return;

    const { email, mobile, password, date, isAdmin } = get();
    const userData = { email, contact: mobile, password, date, isAdmin };

    try {
      const res = await axios.post(`${api}/db/Users`, userData);
      toast.success("Signup successful!");
      return true;
      // Optionally clear form or redirect here
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          toast.error("User already exists with the same email or contact.");
        } else {
          toast.error(err.response.data.message || "Unexpected server error");
        }
      } else if (err.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error(`Signup failed: ${err.message}`);
      }
    }
  },

  //Signup validation End

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