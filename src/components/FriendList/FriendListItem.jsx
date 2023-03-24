import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const status = isOnline ? 'ofline' : 'online';
  return (
    <li className={css.item} key={id}>
      <span className={css[status]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
};

export default FriendListItem;
