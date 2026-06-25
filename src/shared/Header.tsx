import { Link } from "react-router-dom";
import { useAuthStore } from "../app/store/authStore";

function Header() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className="my-4 flex justify-between items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">Система учёта заявок на ремонт</h1>
        <Logo />
      </div>
      <nav className="flex gap-4 text-white">
        <Link to="/" className="hover:text-red-400 transition">Главная</Link>
        {isAuthenticated ? (
          <Link to="/profile" className="hover:text-red-400 transition">
            {user?.name}
          </Link>
        ) : (
          <Link to="/auth" className="hover:text-red-400 transition">Войти</Link>
        )}
      </nav>
    </header>
  );
}

function Logo() {
  return <h2 className="text-red-400 font-bold">RepairSystem</h2>;
}

export default Header;