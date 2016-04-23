import bandInfo from './band-info';
import bandList from './bandList';

module.exports = app => {
  bandInfo(app);
  bandList(app);
};
