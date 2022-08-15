import Image from "next/image";
import styles from "./eye.module.scss";

function Eye() {
  return (
    <div className={styles.eye}>
      <Image
        // onClick="clique(this)"
        src="/eye.svg"
        layout="fill"
        alt="Arte"
        title="View Art"
      />
    </div>
  );
}

export default Eye;
