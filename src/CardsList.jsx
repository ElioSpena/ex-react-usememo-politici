export default function CardsList({ politicians }) {
  return (
    <ul>
      {politicians.map((p, id) => {
        return (
          <li key={id}>
            <div className="title">
              <h3>{p.name}</h3>
              <span>{p.position}</span>
            </div>
            <div className="description">
              <figure>
                <img src={p.image} alt={p.name} />
              </figure>
              <p>{p.biography}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
