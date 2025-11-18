import React, { useEffect, useState } from "react";
import CreateCardPage from "./CreateCardPage";
import { posts as Posts } from "./BlogDataBase";

function Home() {
  const [posts, setPosts] = useState(Posts);//for feture use i used usestate
  console.log();

  const [showCreateForm, setShowCreateForm] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Add new post at the start (latest first)  one more thing is need to update the login that i have used below
  const handleAddPost = (newPost) => {
    const postWithId = { id: posts.length + 1, ...newPost };
    setPosts((prev) => [postWithId, ...prev]);
    setShowCreateForm(false);
    Posts.unshift(newPost);

  };

  // Get the latest post to preview
  const latestPost = posts.length > 0 ? posts[0] : null;

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-300 to-blue-200 flex flex-col items-center px-4 py-10">
      {/* Hero/Welcome Section */}
      <section className="w-full max-w-6xl mb-16 flex flex-col md:flex-row md:items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-2xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            <span className="block">Tech. Growth. Future.</span>
          </h1>
          <p className="text-lg text-gray-700 mb-7 max-w-md">
            Innovate. Inspire. Imagine.</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:from-violet-600 hover:to-cyan-500 hover:shadow-xl hover:-translate-y-1 transform text-lg"
          >
            Create Your First Blog
          </button>
          {/* Modal for Create Blog */}
          {showCreateForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-40">
              <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl relative">
                <button
                  className="absolute top-8 right-2 text-gray-400 hover:text-gray-700 font-bold text-2xl"
                  onClick={() => setShowCreateForm(false)}
                  title="Close form"
                >
                  &times;
                </button>
                <CreateCardPage onAddPost={handleAddPost} />
              </div>
            </div>
          )}
          {/* Trending Topics */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 mb-2">Trending Topics:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-fuchsia-200 text-fuchsia-800 rounded-full px-4 py-1 text-sm font-semibold">AI &amp; Machine Learning</span>
              <span className="bg-sky-200 text-sky-800 rounded-full px-4 py-1 text-sm font-semibold">Internet of Things</span>
              <span className="bg-teal-200 text-teal-800 rounded-full px-4 py-1 text-sm font-semibold">Blockchain</span>
              <span className="bg-purple-200 text-purple-800 rounded-full px-4 py-1 text-sm font-semibold">Smart Cities</span>
              <span className="bg-indigo-200 text-indigo-800 rounded-full px-4 py-1 text-sm font-semibold">Ethics &amp; Privacy</span>
            </div>
          </div>
        </div>
        {/* Featured Blog Post */}
        <div className="md:w-1/2 flex flex-col items-center">
          {latestPost ? (
            <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-violet-200 to-cyan-100 py-4 text-center rounded-t-xl">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Featured Blog</span>
              </div>
              <div className="p-6">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">
                  {latestPost.title}
                </h2>
                <img
                  src={latestPost.image}
                  alt={latestPost.title}
                  loading="lazy"
                  className="rounded-lg shadow mb-4 w-full object-cover h-44 md:h-56"
                />
                <p className="text-gray-600 text-base">{latestPost.excerpt}</p>
                <a
                  href={latestPost.url}
                  className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-violet-500 to-cyan-400 text-white rounded-md font-medium hover:from-violet-600 hover:to-cyan-500 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center text-gray-400 font-semibold shadow-md">
              No blogs yet.<br />Click ‘Create Your First Blog’ to get started!
            </div>
          )}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">How the Future Blog Works</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-md flex-1">
            <div className="w-10 h-10 mx-auto mb-3 text-3xl text-fuchsia-500">🤖</div>
            <h4 className="font-semibold mb-1">Discover</h4>
            <p className="text-gray-500 text-sm">Read expert analysis and explorations on AI, IoT, and next-gen tech.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex-1">
            <div className="w-10 h-10 mx-auto mb-3 text-3xl text-sky-500">💡</div>
            <h4 className="font-semibold mb-1">Engage</h4>
            <p className="text-gray-500 text-sm">Join thought-provoking conversations and share your insights.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex-1">
            <div className="w-10 h-10 mx-auto mb-3 text-3xl text-cyan-500">🚀</div>
            <h4 className="font-semibold mb-1">Create</h4>
            <p className="text-gray-500 text-sm">Contribute your own blog and help shape tomorrow’s digital world.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;