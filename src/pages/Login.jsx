import { Database } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      
      <div className="w-105 bg-white border border-border rounded-lg shadow-sm p-8">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Database className="text-primary" size={28} />
          <span className="text-xl font-semibold text-primary ">
            BusinessOS
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-textPrimary">
          Welcome back
        </h1>

        <p className="text-center text-textSecondary text-sm mt-2 mb-6">
          Please enter your details to sign in
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full h-11 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-11 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-textSecondary">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-11 bg-primary text-white rounded-md font-medium hover:bg-primaryHover transition"
          >
            Sign In
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-sm text-textSecondary mt-6">
          Don't have an account?{" "}
          <span className="text-primary font-medium cursor-pointer">
            Get started
          </span>
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-border"></div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">

          <button className="border border-border rounded-md h-10 flex items-center justify-center text-sm">
            Google
          </button>

          <button className="border border-border rounded-md h-10 flex items-center justify-center text-sm">
            GitHub
          </button>

        </div>

      </div>
    </div>
  );
}