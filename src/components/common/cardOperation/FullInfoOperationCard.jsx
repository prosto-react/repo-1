//Компонент полного отображения операции

import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoOperationCard.module.scss';
import Button from '../button/Button';

const FullInfoOperationCard = ({ amount, category, title, description, date }) => {
  // Определяем класс для положительных и отрицательных сумм
  const amountClass = amount >= 0 ? styles.positive : styles.negative;

  return (
    <div className={styles.operationCard}>
      <div className={styles.operationHeader}>
        <h3>{title}</h3>
        <span className={`${styles.operationAmount} ${amountClass}`}>
          {amount} $
        </span>
      </div>
      <p className={styles.operationCategory}>{category}</p>
      <p className={styles.operationDescription}>{description}</p>
      <p className={styles.operationDate}>{date}</p>

      
      <Button 
        label="Edit"  
        variant="primary" 
        size="medium" 
        disabled={true} 
      />
    </div>  
  );
};

FullInfoOperationCard.propTypes = {
  amount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FullInfoOperationCard;

