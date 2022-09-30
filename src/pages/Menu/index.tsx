import styles from "./Menu.module.scss";
import logo from "../../assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Order from "./Order";
import Itens from "./Itens";

export default function Menu(){
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder]= useState("");
    return(
        <main>
            <nav className={styles.menuNav}>
                <img src={logo} alt="aluroni logo"/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    The house of pasta
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Menu</h3>
                <Search search={search} setSearch={setSearch} />
                <div className={styles.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Order order={order} setOrder={setOrder}/>
                </div>
                <Itens search = {search} filter = {filter} order = {order} />
            </section>
        </main>
    )
}