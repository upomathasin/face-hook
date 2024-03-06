import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth.user.id}`
        );

        console.log(response);
        setUser(response.data.user);
        setPosts(response.data.posts);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  console.log("User", user);
  if (loading) {
    return <h1>Data is Fatching...........</h1>;
  }
  return (
    <div>
      <h1 className="text-8xl text-teal-400">Hi {user?.firstName}</h1>
    </div>
  );
}
