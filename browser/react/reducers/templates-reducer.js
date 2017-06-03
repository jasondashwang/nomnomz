import {
  SET_TEMPLATE
} from '../utilities/constants';

const initialTemplateState = {
  selected: null
};

export default function (state = initialTemplateState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_TEMPLATE:
      newState.selected = action.template;
      break;

    default:
      return state;
  }

  return state;
}
