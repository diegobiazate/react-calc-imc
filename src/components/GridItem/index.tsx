import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css'
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

type Props = {
  item: Level
}

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up' ? upImg : downImg} alt="" width={30} />
      </div>
      <div className={styles.gridTitle}> {item.title} </div>

      {item.yourIMC && 
        <div className={styles.yourImc}>Seu IMC é de {item.yourIMC} kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}