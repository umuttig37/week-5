import PropTypes from 'prop-types';
import {useLocation, useNavigate} from 'react-router-dom';
import SingleView from '../components/SingleView';
const Single = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const item = state.item;

  if (item != null)
    return <SingleView item={item} setItem={() => navigate(-1)} />;
};

Single.propTypes = {
  item: PropTypes.object,
};
export default Single;
