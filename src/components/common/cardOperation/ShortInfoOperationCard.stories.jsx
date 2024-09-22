import React from 'react';
import ShortInfoOperationCard from './ShortInfoOperationCard';

// Экспортируем метаданные для Storybook
export default {
    title: 'Components/CardOperation/ShortInfoOperationCard', 
  component: ShortInfoOperationCard, // Компонент, для которого создается история
  tags: ['autodocs'], // Автоматическая генерация документации
};

// Шаблон (template) для истории
const Template = (args) => <ShortInfoOperationCard {...args} />;

// Варианты (stories) для компонента с различными пропсами
export const Default = Template.bind({});
Default.args = {
  amount: -150.5,
  category: 'Еда',
  title: 'Супермаркет',
  description: 'Купил, фрукты,овощи, другие продукты.',
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  amount: -89.99,
  category: 'Развлечения',
  title: 'Кино',
  description: 'Посмотрел последний блокбастер в кинотеатре. Это был потрясающий опыт с великолепными спецэффектами и захватывающими сценами.',
};

export const PositiveAmount = Template.bind({});
PositiveAmount.args = {
  amount: 1000.00,
  category: 'Доход',
  title: 'Зарплата',
  description: 'Получил аванс',
};

export const NegativeAmount = Template.bind({});
NegativeAmount.args = {
  amount: -45.0,
  category: 'Счета',
  title: 'Счета за электричество',
  description: 'Оплатил счет за электричество.',
};
