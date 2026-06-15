function Header() {
  return (
    <header className="my-4">
      <h1 className="text-white text-2xl font-bold">Система учёта заявок на ремонт</h1>
          <Logo />
    </header>

  );
}
function Logo() {
  return <h2 className="text-red-400 font-bold">RepairSystem</h2>;
}
export default Header;