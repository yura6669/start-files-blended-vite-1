import style from './StatisticsItem.module.css';

const StatisticsItem = ({ stat, icon }) => {
  return (
    <>
     {icon}
  <span className={style.counter}>{stat.total}</span>
  <p className={style.text}>{stat.title}</p>
</>
  )
};

export default StatisticsItem;
