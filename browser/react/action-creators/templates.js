import {
  SET_TEMPLATE
} from '../utilities/constants';

export const receiveTemplate = template => ({
  type: SET_TEMPLATE,
  template
});
