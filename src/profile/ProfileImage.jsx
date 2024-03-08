import React, { useRef } from "react";
import useProfile from "../hooks/useProfile";
import edit from "../assets/icons/edit.svg";
import checkIcon from "../assets/icons/check.png";
import useAxios from "../hooks/useAxios";
import { actions } from "../actions";
export default function ProfileImage() {
  const { state, dispatch } = useProfile();

  const FileUploadRef = useRef(null);
  const { api } = useAxios();
  console.log("ProfileImg ", state);

  const updateDisplayImage = async (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    console.log("formData ", formData);
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state.user.id
        }/avatar`,
        formData
      );
      if (response.status == 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (err) {
      dispatch({
        type: actions.profile.DATA_FETCHED_ERROR,
        error: err.message,
      });
    }
  };
  const handleUpload = (e) => {
    e.preventDefault();
    FileUploadRef.current.click();
  };
  return (
    <div class="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        class="max-w-[80px] rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt="pic"
      />
      <checkIcon></checkIcon>
      <form>
        <button
          onClick={handleUpload}
          type="submit"
          class="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={edit} alt="Edit" />
        </button>
        <input
          type="file"
          id="file"
          hidden
          ref={FileUploadRef}
          onChange={updateDisplayImage}
        />
      </form>
    </div>
  );
}
