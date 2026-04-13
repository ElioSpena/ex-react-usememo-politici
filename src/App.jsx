import { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";

function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((p) => {
      const filterName = p.name.toLowerCase().includes(search.toLowerCase());
      const filterBio = p.biography
        .toLowerCase()
        .includes(search.toLowerCase());
      const filterPosition = selected === "" || selected === p.position;
      return (filterName, filterBio) && filterPosition;
    });
  }, [politicians, search, selected]);

  const positions = useMemo(() => {
    return politicians.reduce((acc, p) => {
      if (!acc.includes(p.position)) {
        return [...acc, p.position];
      }
      return acc;
    }, []);
  }, [politicians]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:3333/politicians");
      const result = await resp.json();
      setPoliticians(result);
    })();
  }, []);

  return (
    <main>
      <div className="title">
        <label htmlFor="search">Filtra per nome o descrizione: </label>
        <input
          value={search}
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="title">
        <label htmlFor="select-country">Filtra per posizione: </label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          id="select-country"
        >
          <option value="">Tutti</option>
          {positions.map((p, id) => (
            <option key={id} value={p}>
              {p}
            </option>
          ))}
        </select>
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
