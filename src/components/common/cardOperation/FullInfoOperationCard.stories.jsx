import React from 'react';
import FullInfoOperationCard from './FullInfoOperationCard';


export default {
  title: 'Components/CardOperation/FullInfoOperationCard', // 
  component: FullInfoOperationCard, 
  tags: ['autodocs'], 
};


const Template = (args) => <FullInfoOperationCard {...args} />;

// Основная история с данными
export const Default = Template.bind({});
Default.args = {
  amount: -120.5,
  category: 'Еда',
  title: 'Супермаркет',
  description: 'Купил, фрукты,овощи, другие продукты',
  date: '2024-09-22',
};
export const PositiveAmount = Template.bind({});
PositiveAmount.args = {
  amount: 1000.00,
  category: 'Доход',
  title: 'Зарплата',
  description: 'Получил аванс',
  date: '2024-09-15',
};
//  Отрицательная сумма
export const NegativeAmount = Template.bind({});
NegativeAmount.args = {
  amount: -45.0,
  category: 'Счета',
  title: 'Счета за электричество',
  description: 'Оплатил счет за электричество.',
  date: '2024-09-19',
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  amount: -89.99,
  category: 'Развлечения',
  title: 'Кино',
  description: 'Посмотрел последний блокбастер в кинотеатре. Это был потрясающий опыт с великолепными спецэффектами и захватывающими сценами.',
  date: '2024-09-19',
};
