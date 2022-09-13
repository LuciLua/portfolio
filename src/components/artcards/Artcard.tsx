import Image from "next/image";
import Link from "next/link";
import Eye from "./Eye";
import styles from "./artCard.module.scss"

function Artcard(props) {
  const { id } = props;

  return (
    <>
      <Image
        // onClick="clique(this)"
        src={`${id}.webp`}
        layout="fill"
        alt="Arte"
        title="View Art"
      />
      <Eye />
    </>
  );
}

export default Artcard;
