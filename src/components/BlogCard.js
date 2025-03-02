import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography,CardActions } from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { generateBlogWithAI } from '../service/BlogApiService'
import { searchBlogs } from '../service/BlogApiService'
import { deleteBlog } from '../service/BlogApiService'
import { updateBlog } from '../service/BlogApiService'

const BlogCard = () => {
  const navigate = useNavigate();
  const { id } = useParams()

  const [title,setTitle] = useState('');
  const [topic,setTopic] = useState('');
  const [content,setContent] = useState('');
  const [readOnlyFlag,setReadOnlyFlag] = useState(true)


  const navigateToHome =  () =>{
    navigate('/')
  }


  const handleGenrateBlogfromAI = async()=>{
      const contentOfAI = await generateBlogWithAI(topic)
      setContent(contentOfAI)
      console.log(contentOfAI)

  }

  const getSelectedBlog = async() =>{
    const selectedBlogData = await searchBlogs(id)
    console.log("selected blog",selectedBlogData)
    setTitle(selectedBlogData[0].title)
    setTopic(selectedBlogData[0].topic)
    setContent(selectedBlogData[0].content)
  }

  const handleEditAction = ()=> {
    setReadOnlyFlag(false)
  }

  const handleDeleteAction = async() =>{
    const selectedeleteBlog = await deleteBlog(id)
    navigate('/')

  }

  const handleUpdateBlog = async () => {
    const updatedObj = {
      id:id,
      content:content,
      topic:topic,
      title:title
    }
    const updatedBlog = await updateBlog(updatedObj)
    alert("Object saved",updatedBlog)

  }

  useEffect(()=>{
    getSelectedBlog()

  },[])

  return (
    <div>
      <Card style={{marginTop:'10px'}}>
      <CardContent>
          <Typography variant="h5" style={{paddingBottom:'10px'}}>Blog Post</Typography>
          <TextField
            id="outlined-suffix-shrink"
            fullWidth
            style={{paddingBottom:'15px'}}
            label="Title"
            value={title}
            disabled={readOnlyFlag}
            onChange={(event)=> setTitle(event.target.value)}
            variant="outlined" />
          <TextField
            id="outlined-suffix-shrink"
            fullWidth
            style={{paddingBottom:'15px'}}
            value={topic}
            label="Topic"
            disabled={readOnlyFlag}
            onChange={(event)=> setTopic(event.target.value)}
            variant="outlined" />
          <TextField
            id="outlined-suffix-shrink"
            fullWidth
            multiline
            rows={10}
            style={{paddingBottom:'15px'}}
            value={content}
            label="Content"
            disabled={readOnlyFlag}
            onChange={(event)=> setContent(event.target.value)}
            variant="outlined" />
          <Button variant="outlined" onClick={handleGenrateBlogfromAI}>Genrate with AI</Button>
        </CardContent>
        <CardActions style={{display:'flex',flexDirection:'row-reverse',gap:'1rem'}}>
          <Button variant="contained" onClick={navigateToHome}>Close</Button>
          <Button variant="contained" onClick={handleEditAction} >edit</Button>
          <Button variant="contained" onClick={handleUpdateBlog} >Save</Button>
          <Button variant="contained" onClick={handleDeleteAction} >Delete</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default BlogCard