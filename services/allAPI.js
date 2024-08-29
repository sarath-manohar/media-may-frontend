import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

// upload video

export const uploadVideoAPI = async(video)=>{
    return await commonAPI ("POST",`${SERVER_URL}/allVideos`,video)
}

// get allUploadedVideos

export const getAllUploadedVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// get A Video
export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

// delete video
export const deleteVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addVideo History

export const addVideoHistoryAPI = async(video)=>{
    return await commonAPI ("POST",`${SERVER_URL}/history`,video)
}

// getHistory
export const getVideoHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// delete History
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// add videos category

export const addVideoCategoryAPI = async(category)=>{
    return await commonAPI ("POST",`${SERVER_URL}/category`,category)
}

// get category
export const getVideoCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

// delete Category
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

// update category
export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
