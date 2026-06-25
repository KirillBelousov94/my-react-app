import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../app/store/authStore";
import api from "../shared/api";

function AuthPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  async function handleSubmit() {
    setError("");
    setLoading(true);

    try {
      const url = tab === "login" ? "/api/auth/login" : "/api/auth/register";
      const body = tab === "login" ? { email, password } : { name, email, password };

      const { data } = await api.post(url, body);

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
  const error = err as { response?: { data?: { message?: string } } };
  setError(error.response?.data?.message || "Ошибка сервера");
} finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-xl p-8 w-full max-w-md text-white">
        <h1 className="text-2xl font-bold mb-6 text-red-400">RepairSystem</h1>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              tab === "login" ? "bg-red-500" : "bg-zinc-700"
            }`}
          >
            Вход
          </button>
          <button
            onClick={() => setTab("register")}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              tab === "register" ? "bg-red-500" : "bg-zinc-700"
            }`}
          >
            Регистрация
          </button>
        </div>

        {tab === "register" && (
          <input
            className="w-full bg-zinc-700 rounded-lg p-3 mb-3 outline-none"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          className="w-full bg-zinc-700 rounded-lg p-3 mb-3 outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full bg-zinc-700 rounded-lg p-3 mb-4 outline-none"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 mb-3 text-sm">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50 py-3 rounded-lg font-bold transition"
        >
          {loading ? "Загрузка..." : tab === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
      </div>
    </div>
  );
}

export default AuthPage;