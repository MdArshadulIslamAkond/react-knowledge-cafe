import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    // console.log(blog)
    const {title, author, author_img, cover, posted_date,hashtags, reading_time} = blog;
    return (
        <div className="mb-20 space-y-4" >
            <img className="w-full mb-8" src= {cover} alt="Cover picture of the title" />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                       
                    </div>
                </div>
                <div className="">
                    <span>{reading_time}min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className="ml-2 text-2xl text-red-600 align-middle"><CiBookmark /></button>
                    
                </div>
            </div>
            <h1 className="text-4xl">Title: {title}</h1>
            <p>
                {hashtags.map(hash=><span key={Math.random()}><a href="">#{hash}</a></span>)}
            </p>
            <div>
            <button onClick={()=>handleMarkAsRead(blog)} className="ml-2 text-2xl text-purple-600 font-bold underline">Mark as Read</button>

            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}; 

export default Blog;