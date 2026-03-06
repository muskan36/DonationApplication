import { useState } from "react";
import { supabase } from "../api/supabaseClient";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name,
          phone: phone,
        }
      }
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Account created! Please check email verification.");
      navigate("/login");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSignup} className="bg-white p-8 shadow-lg rounded-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded disabled:opacity-75"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

      </form>
    </div>
  )
}

export default Signup;