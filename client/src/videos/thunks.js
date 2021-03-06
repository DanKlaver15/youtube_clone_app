import axios from "axios";
import { apiKey } from "../apiKey";

import {
  loadVideosInProgress,
  loadVideosInFailure,
  loadVideosInSuccess,
} from "./actions";

export const loadVideos = (searchParam) => async (dispatch, getState) => {
  try {
    dispatch(loadVideosInProgress());

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchParam}&key=${apiKey}&maxResults=20&part=snippet&type=video`
    );

    const videos = await response.data.items;

    dispatch(loadVideosInSuccess(videos));
  } catch (err) {
    dispatch(loadVideosInFailure());
    console.log(err);
  }
};
