import React from 'react';
import styles from './calculator.module.css';

const Calculator = (): JSX.Element => (
  <div className={styles['simple-calculator']}>
    <button className={styles['span-2']}>AC</button>
    <button className={styles['span-1']}>DEL</button>
    <button className={styles['span-1']}>/</button>
    <button className={styles['span-1']}>1</button>
    <button className={styles['span-1']}>2</button>
    <button className={styles['span-1']}>3</button>
    <button className={styles['span-1']}>*</button>
    <button className={styles['span-1']}>4</button>
    <button className={styles['span-1']}>5</button>
    <button className={styles['span-1']}>6</button>
    <button className={styles['span-1']}>+</button>
    <button className={styles['span-1']}>7</button>
    <button className={styles['span-1']}>8</button>
    <button className={styles['span-1']}>9</button>
    <button className={styles['span-1']}>-</button>
    <button className={styles['span-1']}>.</button>
    <button className={styles['span-1']}>0</button>
    <button className={styles['span-2']}>=</button>
  </div>
);

export default Calculator;
