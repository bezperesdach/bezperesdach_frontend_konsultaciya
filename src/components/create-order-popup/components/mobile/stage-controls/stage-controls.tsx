import { Button } from "@/components/button/button";

import styles from "./stage-controls.module.css";

type Props = {
  forwardButton?: () => void;
};

export const StageControls = ({ forwardButton }: Props) => {
  return (
    <div className={styles.buttons}>
      {forwardButton ? (
        <Button style={{ minWidth: "100%" }} onClick={forwardButton}>
          Далее
        </Button>
      ) : null}
    </div>
  );
};
