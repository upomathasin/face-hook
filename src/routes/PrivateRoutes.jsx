import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../common/Header";
import ProfileProvider from "../providers/ProfileProvider";
export default function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <div>
      {auth.user ? (
        <ProfileProvider>
          {" "}
          <div>
            <Header></Header>
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet></Outlet>
              </div>
            </main>
          </div>
        </ProfileProvider>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </div>
  );
}
