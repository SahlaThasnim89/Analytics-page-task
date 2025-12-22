export function Logos() {
  return (
    <div className="flex justify-center gap-8 py-12">
      {["Mphasis", "Docket AI", "Zappy Hire"].map((name) => (
        <img
          key={name}
          src={`/logos/${name.toLowerCase()}.svg`}
          alt={name}
          className="h-8 opacity-60"
        />
      ))}
    </div>
  );
}
