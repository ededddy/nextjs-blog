import Image from "next/image";
import Link from 'next/link';
import styles from './layout.module.css';

const userIcon = ({name, w, h}) => {
  return (<Link href="/">
    <a>
      <Image
        priority
        src={`/images/${name}.jpg`}
        className={styles.userIcon}
        height={w}
        width={h}
        alt={name}
      />
    </a>
  </Link>
)}; 

export default userIcon;