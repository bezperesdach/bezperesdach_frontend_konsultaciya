import { SearchIcon } from "@/icons/search-icon";

import styles from "./sidebar-prices-search.module.css";

type Props = {
  setSearchQuery: (value: string) => void;
};

const SidebarPricesSearch = ({ setSearchQuery }: Props) => {
  return (
    <div className={styles.container}>
      <SearchIcon title="Найти услугу" width={16} height={16} />
      <div className={styles.divider} />
      <input className={styles.input} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Поиск" />
    </div>
  );
};

export default SidebarPricesSearch;
