import { NavigateFunction } from "react-router-dom";
import { User } from "../types";

const TOKEN_STORAGE_KEY = "auth_token";

export const login = async (
  email: string,
  password: string,
  navigate: NavigateFunction,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
): Promise<void> => {
  const allLocalUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const logInUser = allLocalUsers.find((user: User) => {
    return user.email === email && user.password === password;
  });
  if (logInUser) {
    setIsLoggedIn(true);
    setUser(logInUser);
    return navigate("dashboard");
  }
  return alert("incorrect credentials");
};

export const logout = (): void => {
  // remove token from localStorage
};

export const signup = async (
  email: string,
  password: string,
  Navigate: NavigateFunction
): Promise<void> => {
  const newUser: User = {
    id: Date.now(),
    email: email,
    password: password,
  };
  const localUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(localUsers);
  if (!localUsers) {
    const users: User[] = [newUser];

    localStorage.setItem("users", JSON.stringify(users));
  }
  if (localUsers) {
    const targetUser = localUsers?.find((item: User) => item.email === email);
    if (targetUser) return alert("user already exist");
    localUsers.push(newUser);
    localStorage.clear();
    localStorage.setItem("users", JSON.stringify(localUsers));
  }
  Navigate("/");
};

export const checkAuth = async (): Promise<User | void> => {
  // call server API to check if token is still valid and return user data
};
