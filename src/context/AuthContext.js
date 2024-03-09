import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = useNavigate();
  const registerUser = async (userData) => {
    try {
      const { data } = await axios.post("/api/v1/auth/create-user", userData);
      toast.success("Registered Successfully!");

      return data.success;
    } catch (error) {
      console.log("error", error);
      toast.error("There is error");
    }
  };
  const loginUser = async (userData) => {
    try {
      const { data } = await axios.post("/api/v1/auth/login-user", userData);
      setIsUserLoggedIn(data.success);
      if (data) {
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data?.user);
        navigate("/");
        toast.success("Logged in Successfully!");
      }
    } catch (error) {
      setIsUserLoggedIn(error.response.data.success);
      toast.error("there is error!");
    }
  };
  const checkLogin = async () => {
    try {
      const { data } = await axios.post("/api/v1/auth/protected-route", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsUserLoggedIn(data.success);
      return data.success;
    } catch (error) {
      setIsUserLoggedIn(error.response.data.success);
    }
  };

  useMemo(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      setUser(user.user);
      setToken(user.token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        checkLogin,
        isUserLoggedIn,
        setIsUserLoggedIn,
        user,
        setUser,
        setToken,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
