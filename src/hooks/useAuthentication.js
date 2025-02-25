import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { auth, provider } from '../utils/firebase';
import { validateEmail, validateName, validatePassword } from '../utils/validate';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../utils/slices/userSlice';
import { DEFAULT_AVATAR } from '../utils/constant';

const useAuthentication = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  // Refs for inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = async () => {
    const nameVal = nameRef.current.value;
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;
    const nameError = validateName(nameVal);
    const emailError = validateEmail(emailVal);
    const passError = validatePassword(passwordVal);
    
    if (nameError) return setErrorMsg(nameError);
    if (emailError) return setErrorMsg(emailError);
    if (passError) return setErrorMsg(passError);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailVal, passwordVal);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: nameVal,
        photoURL: DEFAULT_AVATAR
      });
      const { displayName, photoURL } = auth.currentUser;
      dispatch(updateUserProfile({ name: displayName, image: photoURL }));
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const signIn = async () => {
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;
    const emailError = validateEmail(emailVal);
    const passError = validatePassword(passwordVal);

    if (emailError) return setErrorMsg(emailError);
    if (passError) return setErrorMsg(passError);

    try {
      await signInWithEmailAndPassword(auth, emailVal, passwordVal);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return {
    nameRef,
    emailRef,
    passwordRef,
    errorMsg,
    signUp,
    signIn,
    signInWithGoogle,
    setErrorMsg
  };
};

export default useAuthentication;
