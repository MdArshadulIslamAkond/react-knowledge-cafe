import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-3xl  bg-gray-300 ml-4 mt-2">
            <div className="text-4xl">Reading Time: {readingTime} </div>
            <h1 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length} </h1>
            {
            bookmarks.map((bookmark) =><Bookmark key={bookmark.id} bookmark={bookmark}/> )
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;