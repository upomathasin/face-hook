import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../profile/ProfileInfo";
import Bio from "../profile/Bio";
import MyPost from "../profile/MyPost";
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
        if (response.status == 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
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
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <main class="mx-auto max-w-[1020px] py-8">
      <div class="container">
        <ProfileInfo></ProfileInfo>
        <MyPost></MyPost>
      </div>
    </main>
  );
}
