import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
  setLista(["Ler", "Estudar matemática", "Consulta",]);

  }, []);
  return (
    <div className='container'>
      <h1 className='titulo'>Lista de tarefas</h1>
      <div className='inputBotao'>
        <input id='input' placeholder="tarefa" value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
        <button className='btn' onClick={() => adicionarItem()}>Adicionar </button>
      </div>
      <ul className='lista'>
        {lista.map((item, index) => (
          <li key={index} className='item'>
            {item}
            <button className='btnDelete' onClick={() => deletarItem(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarItem() {
    if (novoItem.length <= 0) {
      alert("Digite algo no campo 'tarefa'")
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Voçê já adicionou esta tarefa.");
      return;
    }

    setLista([...lista, novoItem]);
    setNovoItem("")
  }
  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
}

export default App;
