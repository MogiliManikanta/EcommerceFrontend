function Login({ openSignUp }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Back
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium text-sm mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium text-sm mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-red-500 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-red-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <button
            className="text-red-600 font-medium hover:underline"
            onClick={() => openSignUp()}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
