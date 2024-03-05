import React from "react";

import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Link to="/me" className="text-teal-400">
        Go to Profile Page
      </Link>
    </div>
  );
}
