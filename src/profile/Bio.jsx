import React, { useState } from "react";
import check from "../assets/icons/check.png";
import edit from "../assets/icons/edit.svg";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import useAxios from "../hooks/useAxios";
export default function Bio() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  console.log("Bio page", state);

  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  const handleBioEdit = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state.user.id}`,
        { bio }
      );

      if (response.status == 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (err) {
      console.log(err);
      dispatch({
        type: actions.profile.DATA_FETCHED_ERROR,
        data: err.message,
      });
    }
  };
  return (
    <div class="mt-4 flex items-start gap-2 lg:mt-6">
      <div class="flex-1">
        {!editMode ? (
          <p class="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            cols={55}
            className="p-2  leading-[188%] text-gray-600 lg:text-lg rounded-md "
          ></textarea>
        )}
      </div>

      {!editMode ? (
        <button
          class="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={edit} alt="Edit" />
        </button>
      ) : (
        <button class="flex-center h-7 w-7 rounded-full">
          <img src={check} alt="check" onClick={handleBioEdit} />
        </button>
      )}
    </div>
  );
}
