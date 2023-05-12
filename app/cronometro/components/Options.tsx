export interface MenuProps {
    onStart: () => void;
    onPause: () => void;
    onReset: () => void;
  }
  export default function Resetar({onStart, onPause, onReset}: MenuProps) {
    return (
      <div>
        <button onClick={onStart}>Começa</button>
        <button onClick={onPause}>Pausa</button>
        <button onClick={onReset}>Resetar tudo</button>
      </div>
    );
  }
  