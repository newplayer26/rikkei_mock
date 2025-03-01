import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { LockClosedIcon } from "@heroicons/react/24/solid";

const GoogleIcon = () => (
  <svg
    className="icon-base"
    aria-hidden="true"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const router = useRouter();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      await signInWithEmail(email, password);
      console.log(email, password);
      router.push("/dashboard");
    } catch (error) {
      toast.error("Failed to sign in");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      toast.error("Failed to sign in with Google");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <LockClosedIcon
              className="w-1 h-1 text-indigo-600"
              aria-hidden="true"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>

        <div className="mt-8 bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6" onSubmit={handleEmailLogin}>
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="input-field mt-1"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field mt-1"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between space-x-4">
              <button type="submit" className="flex-1 btn-primary">
                Sign in
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex-1 btn-secondary flex items-center justify-center space-x-2"
              >
                <GoogleIcon />
                <span>Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
