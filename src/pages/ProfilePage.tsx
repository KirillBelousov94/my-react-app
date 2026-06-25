import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../app/store/authStore";

function ProfilePage() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/auth");
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Профиль</h1>
        <div className="bg-zinc-800 rounded-xl p-6 max-w-md">
          <p className="mb-2"><span className="text-zinc-400">Имя:</span> {user?.name}</p>
          <p className="mb-2"><span className="text-zinc-400">Email:</span> {user?.email}</p>
          <p className="mb-4"><span className="text-zinc-400">Роль:</span> {user?.role}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-medium transition"
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;