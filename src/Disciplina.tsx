import "./Disciplina.css";

type DisciplinaProps = {
    codigo: string;
    nome: string;
}

export default function Disciplina(props: DisciplinaProps) {
    
  return (
  <div className="disciplina">
    <div>{props.codigo}</div>
    <div>{props.nome}</div>
  </div>
  );
}
