import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://dummyjson.com/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => console.log("Token noto‘g‘ri yoki login qilinmagan"));
    }
  }, [token]);

  if (!token) return <p>Iltimos, login qiling.</p>;
  if (!user) return <p>Yuklanmoqda...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Profil ma'lumotlari</h2>
      <p><strong>Ism:</strong> {user.firstName}</p>
      <p><strong>Familiya:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
    </div>
  );
};

export default Profile;
