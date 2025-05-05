import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (email === user.email && password === user.password) {
        setError("");
        navigate("/home");
      } else {
        setError("Email yoki parol noto‘g‘ri.");
      }
    } else {
      setError("Foydalanuvchi mavjud emas. Avval ro‘yxatdan o‘ting.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Kirish</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
          Kirish
        </button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        <p className="mt-4 text-center">
          Yangi foydalanuvchi?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Ro'yxatdan o'ting
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
