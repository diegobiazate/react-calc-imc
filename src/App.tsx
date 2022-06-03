import { useState } from 'react';
import styles from './App.module.css';
import powerImg from './assets/powered.png';
import returnImg from './assets/leftarrow.png'
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setShowItem(calculateImc(heightField, weightField));
    } else {
      alert('Preencha todos os Campos.');
    }
  }

  const handleBackButton = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImg} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>O IMC (ou índice de massa corporal) é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.</p>

          <input type="number"
            placeholder='Digite sua Altura. Ex: 1.8 (em Metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={showItem ? true : false}
          />
          <input type="number"
            placeholder='Digite seu Peso. Ex: 82.6 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={showItem ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={showItem ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!showItem &&
            < div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {showItem &&
            <div className={styles.result}>
              <div className={styles.imgReturn} onClick={handleBackButton}>
                <img src={returnImg} alt="" width={25} />
              </div>
              <GridItem item={showItem} />
            </div>
          }
        </div>
      </div>
    </div >
  );
}

export default App;