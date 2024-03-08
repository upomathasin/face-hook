import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../profile/ProfileInfo";
import Bio from "../profile/Bio";
export default function Profile() {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    //setLoading(true);
    dispatch({
      type: actions.profile.DATA_FETCHING,
    });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth.user.id}`
        );

        console.log(response);
        dispatch({
          type: actions.profile.DATA_FETCHED,
          data: response.data,
        });
      } catch (err) {
        console.log(err);

        dispatch({
          type: actions.profile.DATA_FETCHED_ERROR,
          error: err.message,
        });
      } finally {
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <h1>Data is Fatching...........</h1>;
  }
  return (
    <main class="mx-auto max-w-[1020px] py-8">
      <div class="container">
        <ProfileInfo></ProfileInfo>
        <Bio></Bio>
      </div>
    </main>
  );
}
