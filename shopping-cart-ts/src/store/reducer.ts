import { IState } from '../typings';
import { TAction } from './actions';
import { SET_PHONE_LIST } from './actionTypes';
import initialState from './state'


function reducers (state:IState = initialState,action:TAction):IState {

  switch(action.type) {
    case SET_PHONE_LIST:
      return {
        ...state,
        phoneList:action.payload
      };
      default:
        return state
  }

}

export default reducers