import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { unlockKnowledge as initialData, posts as initialPosts } from "./BlogDataBase";
import CreateCardPage from "./CreateCardPage"; // Ensure this import path is correct


function Blog() {
  
  const [posts, setPosts] = useState(initialPosts);
 
  
  console.log("testing new post",initialPosts);
  
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleAddPost = (newPost) => {
    const postWithId = { id: posts.length, ...newPost };
    setPosts((prevPosts) => [postWithId, ...prevPosts]);
    setShowModal(false);
    // {console.log("new post comming " ,newPost);console.log(posts);}
    initialPosts.unshift(newPost);
    
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-200">
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Blog</h1>
      

        {/* New two-column section for featured content and create button */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-10">
          {/* unlockKnowledge featured card */}
          <div className="md:w-3/4 bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <img
              src={initialData.image}
              alt={initialData.title.replace(/\*\*/g, "")}
              className="mx-auto mb-6 w-full h-48 object-cover rounded-lg"
            />
            <h2
              className="text-2xl font-extrabold mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: initialData.title }}
            />
            <p
              className="text-gray-700 text-center text-lg"
              dangerouslySetInnerHTML={{ __html: initialData.excerpt }}
            />
          </div>

          {/* Button to open modal, now on the side */}
          <div className="md:w-1/4 text-center md:flex md:flex-col md:items-center md:justify-center lg:py-10">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-light px-8 py-4 lg:py-40 rounded-xl shadow-lg transition-all duration-300 hover:from-violet-600 hover:to-cyan-500 hover:shadow-xl hover:-translate-y-1 transform w-full"
            >
              CREATE YOUR BLOG
            </button>
          </div>
        </section>

        {/* Posts Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 hover:text-cyan-600 cursor-pointer">
                  <Link to={post.url}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={post.url}
                  className="text-cyan-500 font-semibold hover:text-violet-500 transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal popup for CreateCardPage */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowModal(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-2xl focus:outline-none"
                aria-label="Close modal"
              >
                &times;
              </button>
              <CreateCardPage onAddPost={handleAddPost} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Blog;