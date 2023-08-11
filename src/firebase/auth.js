import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./init";

export const signupWithEmailAndPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert("登録失敗");
  }
};

export const signinWithEmailAndPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert("サインイン失敗");
  }
};

export const signout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert("サインアウト時にエラーが発生しました。");
  }
};
