import "./Disciplina.css";

type DisciplinaProps = {
    codigo: string;
    nome: string;
}

export default function Disciplina({codigo, nome}: DisciplinaProps) {
    
  return (
  <div className="disciplina">
    <div>{codigo}</div>
    <div>{nome}</div>
  </div>
  );
}
