import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";  // Import Firebase's signOut method
import { auth } from "@/integration/firebase";  // Assuming you're using Firebase for authentication

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear localStorage data (token and user)
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Sign out from Firebase Authentication (if using Firebase)
      await signOut(auth);

      // Redirect to the login page after logging out
      navigate("/login");

      // Optional: Show a message or alert after successful logout
      alert("You have been logged out successfully.");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <Button
        className="bg-red-500 text-white"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
