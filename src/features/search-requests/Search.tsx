interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

function Search({ value, onChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Поиск по описанию/клиенту"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-zinc-800 text-white text-[20px] w-96 rounded-xl p-2"
    />
  );
}

export default Search;