type SvgProps = {
  width: string;
  height: string;
  color: string;
  viewBox: string;
  styles: React.CSSProperties;
};

const RightArrow = ({ width, height, color, viewBox, styles }: SvgProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      style={styles}>
      <title>Right arrow</title>
      <path d='M.1 7.5h14v2H.1z'></path>
      <path d='m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z'></path>
      <path d='m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z'></path>
    </svg>
  );
};

export default RightArrow;
