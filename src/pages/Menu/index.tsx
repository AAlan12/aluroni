import styles from "./Menu.module.scss";
import logo from "../../assets/logo.svg";
import Search from "./Search";
import { useState } from "react";

export default function Menu(){
    const [search, setSearch] = useState("");
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
            </section>
        </main>
    )
}