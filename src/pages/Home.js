import React, { useEffect, useState } from 'react'
import { fetchBlogs } from '../service/BlogApiService'
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {TextField} from '@mui/material';
import { createFilter } from 'react-search-input';

const HomePage = () => {
  const [blogData,setBlogData] = useState([])
  const [filteredData,setFilteredData] = useState([])

  const navigate = useNavigate()

  const getAllBlogs = async () => {
    try {
      const getAllBlogsData = await fetchBlogs();
      setBlogData(getAllBlogsData);
      setFilteredData(getAllBlogsData)
      console.log(getAllBlogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  const handleBlogView = (id)=>{
    console.log("blog view ",id)
    navigate('/post/'+id)
  }

  const handleBlogSearch = (event) =>{
    const searchInput =  event.target.value
    const filterData = blogData.filter(createFilter(searchInput,['title','topic']))
    setFilteredData(filterData)

  }

  useEffect(() => {
    getAllBlogs();
  },[])
  
  return (
    <div style={{ padding: "15px", overflow: "auto",height:'calc(100vh - 100px)' }}>
      <TextField
        id="outlined-suffix-shrink"
        fullWidth
        style={{marginBottom:'15px',backgroundColor:'white'}}
        label="Search Blog by Topic or Title"
        onChange={handleBlogSearch}
        variant="outlined" />
    {filteredData.map((blog) => (
      <Card key={blog.id} onClick={()=>handleBlogView(blog.id)} className="card-section" style={{ marginBottom: "10px", padding: "10px" }}>
        <CardContent>
          <Typography variant="h5">{blog.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {blog.topic}
          </Typography>
          <Typography variant="body2">{blog.content}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}

export default HomePage