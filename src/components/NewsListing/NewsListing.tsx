// import { styles } from './NewsListing.module.css';
import NewsTile from './NewsTile';

type contentProps = {
  title: string;
  image: string;
  imageAlt: string;
  pressNumber: string;
  link: string;
}[];

const NewsListing = (props: contentProps) => {
  const { content } = props;

  const tiles = content.map(data => <NewsTile key={crypto.randomUUID()} tileData={data} />);

  return <div>{tiles}</div>;
};

export default NewsListing;
