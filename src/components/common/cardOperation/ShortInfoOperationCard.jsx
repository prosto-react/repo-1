//Компонент краткого отображения операции
import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoOperationCard.module.scss';

const ShortInfoOperationCard = ({ amount, category, title, description }) => {
  // Обрезаем описание до 50 символов и добавляем "..." в конце, если оно длиннее
  const truncatedDescription = description.length > 50 
    ? `${description.substring(0, 50)}...` 
    : description;

    const amountClass = amount >= 0 ? styles.positive : styles.negative;

  return (
    <div className={styles.operationCard}>
      <div className={styles.operationHeader}>
        <h3>{title}</h3>
        <span className={`${styles.operationAmount} ${amountClass}`}>{amount} $</span>
      </div>
      <p className={styles.operationCategory}>{category}</p>
      <p className={styles.operationDescription}>{truncatedDescription}</p>
    </div>
  );
};


ShortInfoOperationCard.propTypes = {
  amount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShortInfoOperationCard;
