import { useEffect, useState } from "react";
import CardsList from "./CardsList";

function App() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:3333/politicians");
      const result = await resp.json();
      setPoliticians(result);
    })();
  }, []);

  return (
    <main>
      <CardsList politicians={politicians} />
    </main>
  );
}

export default App;
