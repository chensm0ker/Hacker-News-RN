import axios from 'axios';
import { selectFields,  } from '../utils/selectFields';
import { userFields } from '../utils/userFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

export const getStory = async (storyId: string) => {
    const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => selectFields(data));

    return result;
}

export const getUser = async (userId: string) => {
    const result = await axios
    .get(`${userUrl + userId}.json`)
    .then(({ data }) => userFields(data));

    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({data}) => data);

    return result;
}


 