import MediaRow from '../components/Mediarow.jsx';
import {useState} from 'react';
import {useMedia} from '../hooks/apihooks.js';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const {mediaArray} = useMedia();

  return (
    <>
      <table>
        <tbody>
          {mediaArray.map((mediaItem) => (
            <MediaRow
              key={mediaItem.media_id}
              item={mediaItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
