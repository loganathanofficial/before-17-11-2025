import { useState } from "react";

export default function CreateCardPage({ onAddPost }) {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    image: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt || !formData.image || !formData.url) {
      alert("Please fill in all fields");
      return;
    }
    onAddPost(formData);
    setFormData({
      title: "",
      excerpt: "",
      image: "",
      url: "",
    });
    alert("Post added successfully!");
  };

  return (
    <div className="w-full mx-auto p-4 sm:max-w-xl sm:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Create New Card</h1>
      <div className="max-h-full overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="title" className="block mb-1 font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Enter post title"
              value={formData.title}  // ask this one to sir why we need to show again to the page after changing the title valur
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block mb-1 font-semibold text-gray-700">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={4}
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Enter post excerpt"
              value={formData.excerpt}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="image" className="block mb-1 font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="/images/your-image.jpg"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="url" className="block mb-1 font-semibold text-gray-700">
              Post URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="/blog/your-post-url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white py-3 rounded font-semibold w-full hover:from-violet-600 hover:to-cyan-500 transition-all duration-300"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}