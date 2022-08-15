import Image from "next/image";
import styles from "./skillcarditem.module.scss"

function Skillcarditem(props) {
  const { srcIcon, title, children } = props;

  return (
    <div className={styles.item}>
      <Image
        objectFit="contain"
        width={60}
        height={60}
        src={srcIcon}
        alt={title}
        title={title}
      />
      <span>{children}</span>
    </div>
  );
}

export default Skillcarditem;
