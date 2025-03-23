import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import  StatisticsItem  from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const size = 40;
  const icons = [
    <FaRegThumbsUp size={size} />,
    <MdPeople size={size} />,
    <MdOutlineProductionQuantityLimits size={size} />,
    <GiTreeDoor size={size} />
  ];
  return (
    <>
      {title && <h3 className={style.title}>Main Statistics</h3>}

<ul className={style.list}>
 {
          stats.map((stat, index) => (
      <li className={style.item} key={stat.id}>
              <StatisticsItem stat={ stat } icon={icons[index]} />
    </li>
    ))
} 
</ul>
    </>
  )
};

export default Statistics;
