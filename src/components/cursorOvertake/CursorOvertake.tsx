import { useRef } from 'react';
import styles from './CursorOvertake.module.css';

type CursorOvertakeProps = {
  children: React.ReactNode;
  followerText: string;
};

const CursorOvertake = ({ children, followerText }: CursorOvertakeProps) => {
  const followerRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!followerRef.current) return;

    const cursorCorrection = 55;
    const x = event.pageX - cursorCorrection;
    const y = event.pageY - cursorCorrection;

    followerRef.current.style.setProperty('--x', `${x}px`);
    followerRef.current.style.setProperty('--y', `${y}px`);
    followerRef.current.style.transition = 'all 0.05s';
    document.body.style.cursor = 'none';
  };

  const resetFollowerPosition = () => {
    if (!followerRef.current) return;

    const parentWidth = followerRef.current.parentElement?.offsetWidth || 0;
    const parentHeight = followerRef.current.parentElement?.offsetHeight || 0;
    const followerWidth = followerRef.current.offsetWidth;
    const followerHeight = followerRef.current.offsetHeight;

    const x = (parentWidth - followerWidth) / 2;
    const y = (parentHeight - followerHeight) / 2;

    followerRef.current.style.setProperty('--x', `${x}px`);
    followerRef.current.style.setProperty('--y', `${y}px`);
    followerRef.current.style.transition = 'all .5s';

    document.body.style.cursor = 'auto';
  };

  return (
    <div onMouseMove={handleMouseOver} onMouseLeave={resetFollowerPosition}>
      <div ref={followerRef} className={styles.follower}>
        <span>{followerText}</span>
      </div>
      {children}
    </div>
  );
};

export default CursorOvertake;
