import NewsTile from './NewsTile';

type NewsListingProps = {
  content: {
    title: string;
    image: string;
    imageAlt: string;
    pressNumber: string;
    link: string;
    id: string;
  }[];
};

const NewsListing = ({ content }: NewsListingProps) => {
  const tiles = content.map(data => <NewsTile key={data.id} tileData={data} />);

  return <div>{tiles}</div>;
};

export default NewsListing;
