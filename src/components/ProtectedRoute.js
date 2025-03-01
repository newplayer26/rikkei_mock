import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
