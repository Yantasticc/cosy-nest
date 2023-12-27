import { useState } from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
  const [isDomestic, setIsDomestic] = useState(true); 

  const handleToggle = () => {
    setIsDomestic(prevState => !prevState);
  };

  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${isDomestic ? styles.domestic : styles.international}`}
        onClick={handleToggle}
      >
        <div className='pl-3.5'>
            <span className={styles.text}>
            {isDomestic ? 'Domestic' : ''}
            </span>
            <span className={styles.text}>
            {!isDomestic ? 'International' : ''}
            </span>
        </div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
