import { LeftPanel } from "./components/left-panel/left-panel";
import { RightPanel } from "./components/right-panel/right-panel";

import styles from "./final.module.css";

export const Final = () => {
  return (
    <div className={styles.final}>
      <div className={styles.container}>
        <LeftPanel className={styles.left_panel} />
        <div className={styles.separator} />
        <RightPanel className={styles.right_panel} />
      </div>
    </div>
  );
};
