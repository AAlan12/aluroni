import menu from './itens.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props{
  search: string;
  filter: number | null;
  order: string
}

export default function Itens(props: Props) {
  const [list, setList] = useState(menu);
  const{search, filter, order} = props

  function testSearch(title: string){
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number | null){
    if(filter !== null)return filter === id;
    return true;
  }

  function sorted(newList: typeof menu){
    switch(order){
      case "part":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "amt_people":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }
  
  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) &&
    testFilter(item.category.id));
    setList(sorted(newList));
  },[search, filter, order]);

  return (
    <div className={styles.itens}>
      {list.map(item => (
        <Item key={item.id}
         {...item}
         />
      ))}
    </div>
  )
}