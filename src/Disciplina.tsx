import "./Disciplina.css";

export default function Disciplina() {
    const codigo = "DCC207";
    const nome = "Desenvolvimento Web Front-End";

  return (
  <div className="disciplina">
    <div>{codigo}</div>
    <div>{nome}</div>
  </div>
  );
}
