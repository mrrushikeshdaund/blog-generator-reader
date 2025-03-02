import React, { useState } from 'react'
import { Card, CardContent, Typography,CardActions } from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { generateBlog } from '../service/BlogApiService'
import { generateBlogWithAI } from '../service/BlogApiService'


const BlogForm = () => {
  const navigate = useNavigate();

  const [title,setTitle] = useState('');
  const [topic,setTopic] = useState('');
  const [content,setContent] = useState('');


  const navigateToHome =  () =>{
    navigate('/')
  }

  const handleCreateNewBlog = async()=>{
    console.log(topic)
    console.log(title)
    console.log(content)

    const newObj = {
      topic:topic,
      title:title,
      content:content
    }
    const createdBlog = await generateBlog(newObj)
    console.log(createdBlog)
  }

  const handleGenrateBlogfromAI = async()=>{
      const contentOfAI = await generateBlogWithAI(topic)
      setContent(contentOfAI)
      console.log(contentOfAI)

  }

  return (
    <div>
      <Card style={{marginTop:'10px'}}>
      <CardContent>
          <Typography variant="h5" style={{paddingBottom:'10px'}}> Create New Blog Post</Typography>
          <TextField
            id="outlined-suffix-shrink"
            fullWidth
            style={{paddingBottom:'15px'}}
            label="Title"
            value={title}
            onChange={(event)=> setTitle(event.target.value)}
            variant="outlined" />
          <TextField
            id="outlined-suffix-shrink"
            fullWidth
            style={{paddingBottom:'15px'}}
            value={topic}
            label="Topic"
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
            onChange={(event)=> setContent(event.target.value)}
            variant="outlined" />
          <Button variant="outlined" onClick={handleGenrateBlogfromAI}>Genrate with AI</Button>
        </CardContent>
        <CardActions style={{display:'flex',flexDirection:'row-reverse',gap:'1rem'}}>
          <Button variant="contained" onClick={navigateToHome}>Close</Button>
          <Button variant="contained" onClick={handleCreateNewBlog}>Post</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default BlogForm