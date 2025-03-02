const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let blogs = [
  { id: 1, title: "His mother had always taught him", content: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.", topic: "AI" },
  { id: 2, title: "He was an expert but not in a discipline", content: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.", topic: "React" },
];

// API to Create Blog Post
app.post("/api/generate", (req, res) => {
  const  topic  = req.body.topic;
  const title = req.body.title;
  const content  = req.body.content;
  if (!topic) return res.status(400).json({ message: "Topic is required" });

  const newBlog = {
    id: blogs.length + 1,
    title: title,
    content: content,
    topic:topic,
  };

  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// API to fetch all blog posts
app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

// API to search/filter posts (optional)
app.get("/api/blogs/search", (req, res) => {
  const { query } = req.query;
  if (!query) return res.json(blogs);

  const filteredBlogs = blogs.filter((blog) =>
    String(blog.id).includes(String(query)) ||
    blog.content.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredBlogs);
});


// API to delete a blog post
app.delete("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  blogs = blogs.filter((blog) => blog.id !== parseInt(id));

  res.json({ message: "Blog deleted successfully" });
});

app.put("/api/blogs/:id",(req,res) => {
  const  topic  = req.body.topic;
  const  id  = req.body.id;
  const title = req.body.title;
  const content  = req.body.content;
  if (!id) return res.status(400).json({ message: "Id is required" });

  blogs.map((blog) => {
    if(String(blog.id).includes(String(id))){
      blog.content = content
      blog.topic = topic
      blog.title = title
    }
  }
  );

  res.status(201).json({'message':'data updated succesfully'});  
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
