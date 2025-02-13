"use client";

import axios from "axios";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const CreateUser = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    const createUser = async () => {
      if (!isSignedIn || !user) {
        toast.error("User not signed in.");
        return;
      }

      try {
        const response = await axios.post("/api/create-user");
        toast.success(response.data.message || "User created successfully!");

        setTimeout(() => {
          router.push("/subscriptions");
        }, 2000);
      } catch (error) {
        const errorMsg =
          axios.isAxiosError(error) && error.response?.data?.error
            ? error.response.data.error
            : "Error creating user.";
        toast.error(errorMsg);
      }
    };

    createUser();
  }, [isSignedIn, user, router]);

  return (
    <div>
      <Toaster position="top-center" />
      <p>Processing Sign In...</p>
    </div>
  );
};

export default CreateUser;
