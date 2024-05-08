import { registerUser } from "@/app/actions";

export default function RegisterForm() {
  return (
    <form class="login-form" action={registerUser}>
      <div>
        <label for="name">Full Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <div>
        <label for="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" />
      </div>

      <div>
        <label for="bio">Bio</label>
        <input class="min-h-16" type="text" name="bio" id="bio" />
      </div>

      <button
        type="submit"
        class="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Register
      </button>
    </form>
  );
}
