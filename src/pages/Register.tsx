import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // LocalStorage'ga foydalanuvchini saqlash
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login"); // Registerdan so'ng login sahifasiga yo‘naltirish
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Ro'yxatdan o'tish</h2>
        <input
          type="text"
          name="name"
          placeholder="Ism"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Parol"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default Register;
