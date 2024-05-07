import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="grid h-screen place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="text-2xl font-bold">Sign in</h4>

        <LoginForm />
        <span className="text-xs text-center text-gray-500">
          Don't have an account?
          <a className="underline hover:text-indigo-600" href="./register.html">
            Register
          </a>
        </span>
      </div>
    </section>
  );
}
