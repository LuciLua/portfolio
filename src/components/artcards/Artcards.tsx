import Image from "next/image";
import Eye from "./Eye";

function ArtCard(props) {
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

export default ArtCard;
