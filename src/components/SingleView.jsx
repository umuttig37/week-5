import PropTypes from 'prop-types';
import Button from './UI/Button';
const SingleView = (props) => {
  const {item, setItem} = props;
  const handleClick = () => {
    setItem(null);
  };
  return (
    <>
      <dialog
        className="my-10 w-1/2 rounded-lg border"
        open={item ? true : false}
      >
        {item && (
          <>
            {item.media_type.includes('video') ? (
              <video className="m-auto h-3/4 content-center" controls>
                <source src={item.filename} type={item.media_type} />
              </video>
            ) : (
              <img
                className="m-auto h-3/4"
                src={item.filename}
                alt={item.title}
              />
            )}
            <h2>{item.title}</h2>

            <p>{item.description}</p>
            <p>Created: {new Date(item.created_at).toLocaleString()}</p>
            <p>Created by {item.username}</p>
            <p>Size: {item.filesize}</p>
            <Button text="Close" handleClick={handleClick}>
              Close
            </Button>
          </>
        )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  item: PropTypes.object,
  setItem: PropTypes.func.isRequired,
};
export default SingleView;
