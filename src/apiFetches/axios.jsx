import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Api_Url = "http://localhost:3000/api/v1/"
const token = Cookies.get("token");

export const getUser = async () => {
    let decoded = null
    if (token) {
        decoded = jwtDecode(token)
    }
    try {
        const {data} = await axios.get(`${Api_Url}/${decoded?.userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getAllBlogs = async () => {
    try {
        const {data} = await axios.get(`${Api_Url}/blog/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const {blogs} = data
        return blogs
    } catch (error) {
        console.log(error);
    }
}
export const getRecentBlogs = async () => {
    try {
        const {data} = await axios.get(`${Api_Url}/blog/recent`)
        const {blogs} = data
        return blogs
    } catch (error) {
        console.log(error);
    }
}
export const getABlog = async (blogId) => {
    try {
        const {data} = await axios.get(`${Api_Url}/blog/${blogId}`)
        const {blog} = data
        return blog
    } catch (error) {
        console.log(error);
    }
}
export const getUserBlogs = async () => {
    try {
        const {data} = await axios.get(`${Api_Url}/blog/all/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const {blogs} = data
        return blogs
    } catch (error) {
        console.log(error);
    }
}
export const createBlog = async (data) => {
    try {
        const res = await axios.post(`${Api_Url}/blog/create`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data.success
        
    } catch (error) {
        console.log(error);
    }
}


export const editBlog = async (blogId, data) => {
    
    try {
        const res = await axios.patch(`${Api_Url}/blog/${blogId}`, {...data}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data
        
    } catch (error) {
        console.log(error);
    }
}