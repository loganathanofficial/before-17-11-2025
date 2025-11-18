function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 to-blue-200 px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Login</h1>

        <form className="bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="username" className="block font-semibold text-gray-700 mb-2">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username or Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white py-3 rounded font-semibold transition-all duration-300 hover:from-violet-600 hover:to-cyan-500"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;