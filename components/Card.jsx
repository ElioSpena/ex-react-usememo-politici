export default function Card({ p }) {
  return (
    <li>
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
}
