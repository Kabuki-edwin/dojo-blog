import { useState } from "react";
import Bloglist from "./Bloglist ";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
     
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

    return (  
        <div className="home">
           <Bloglist blogs ={blogs} title ='All blogs' handleDelete ={handleDelete}></Bloglist>       
        </div>
    );
}
 
export default Home; 