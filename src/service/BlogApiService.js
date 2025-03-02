import axios from "axios";

const BASE_URL = window.location.origin;

const API_URL = `${BASE_URL.split(':')[0]}:${BASE_URL.split(':')[1]}:5000/api`;

const API_KEY = "AIzaSyAeX5dhXO0ye3d_-sRrLHU5lVw6hHwnUmc";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent"

export const generateBlog = async (newObj) => {
  const response = await axios.post(`${API_URL}/generate`, newObj);
  return response.data;
};

export const fetchBlogs = async () => {
  const response = await axios.get(`${API_URL}/blogs`);
  return response.data;
};

export const searchBlogs = async (query) => {
  const response = await axios.get(`${API_URL}/blogs/search?query=${query}`);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_URL}/blogs/${id}`);
  return response.data;
};


export const updateBlog = async (newObj) => {
  const response = await axios.put(`${API_URL}/blogs/:id`, newObj);
  return response.data;
};

export const generateBlogWithAI = async (topic) => {
  try {
    const response = await axios.post(
        `${GEMINI_API_URL}?key=${API_KEY}`,
        {
            contents: [{ role: "user", parts: [{ text: `Write a detailed blog on ${topic}` }] }]
        }
    );
    return response.data.candidates[0].content.parts[0].text;
} catch (error) {
    console.error("Error generating blog:", error);
    return "Failed to generate blog content.";
}
};
