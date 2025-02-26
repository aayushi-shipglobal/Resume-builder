import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignUpImage from "@/assets/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import Google from "@/assets/google.png";
import { auth, googleProvider, twitterProvider, facebookProvider } from "@/integration/firebase";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";

const signInWithGoogle = async (navigate: Function) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const token = await user.getIdToken();
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

const signInWithFacebook = async (navigate: Function) => {
  try {
    await signInWithRedirect(auth, facebookProvider);

    const result = await getRedirectResult(auth);

    if (result) {
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  } catch (error) {
    console.error("Error signing in with Facebook", error);
  }
};

const signInWithTwitter = async (navigate: Function) => {
  try {
    const result = await signInWithPopup(auth, twitterProvider);
    const user = result.user;
    const token = await user.getIdToken();
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  } catch (error) {
    console.error("Error signing in with Twitter:", error);
  }
};
const simpleSignUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  navigate: Function,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`,
    });
    const token = await userCredential.user.getIdToken();
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userCredential.user));
    navigate("/");
  } catch (error) {
    console.error("Error signing up with email:", error);
  }
};

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = () => {
    simpleSignUp(email, password, firstName, lastName, navigate);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:space-y-8 lg:gap-x-20 z-50 mb-4 m-4 md:m-28">
      <div className="flex items-center">
        <img src={SignUpImage} className="h-100 mt-16" />
      </div>
      <div className="p-8 bg-slate-100 rounded-md w-auto">
        <p className="text-2xl font-bold mb-4 text-center">Sign Up</p>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <Label className="text-base">First Name</Label>
            <Input
              placeholder="Enter your Email"
              className="my-2 bg-white"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <Label className="text-base">Last Name</Label>
            <Input
              placeholder="Enter your Email"
              className="my-2 bg-white"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label className="text-base">Email</Label>
          <Input placeholder="Enter your Email" className="my-2 bg-white" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Label className="text-base">Password</Label>
          <Input
            type="password"
            placeholder="Enter your Password"
            className="mt-2 bg-white"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <Label className="text-base">Phone No.</Label>
          <Input
            placeholder="Enter your Phone no."
            className="mt-2 bg-white"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          {" "}
          <Button className="bg-teal-600 mt-6 w-full" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm">or signup with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-2">
          <p
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border font-bold bg-white"
            onClick={() => signInWithGoogle(navigate)}
          >
            <img src={Google} className="w-5 h-5 bg-white fill-white" />
          </p>
          <Button
            className="w-8 h-8 flex items-center justify-center rounded-full border font-bold bg-indigo-800 text-white"
            onClick={() => signInWithFacebook(navigate)}
          >
            f
          </Button>
          <Button
            className="w-8 h-8 flex items-center justify-center rounded-full border font-bold bg-black text-white"
            onClick={() => signInWithTwitter(navigate)}
          >
            X
          </Button>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="login" className="text-teal-600 font-medium hover:underline pl-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
