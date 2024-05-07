export default function LoginForm() {
  return (
    <form className="login-form">
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-indigo-600 btn-primary hover:bg-indigo-800"
      >
        Login
      </button>
    </form>
  );
}
