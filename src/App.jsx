import { useEffect, useState } from "react";
import Card from "../components/Card";

function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");

  const filteredPoliticians = politicians.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.biography.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:3333/politicians");
      const result = await resp.json();
      setPoliticians(result);
    })();
  }, []);

  return (
    <main>
      <div>
        <label htmlFor="search">Filtra per nome o descrizione: </label>
        <input
          value={search}
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul>
        {filteredPoliticians.map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </ul>
    </main>
  );
}

export default App;
