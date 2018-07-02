import { ASL_LEFT, ASL_ELLIPSIS } from  '../actions/ASL';

const defaultUserState = {
    status: null,
    isLeft:false,
    title:'思凡晓月(更新中...)'
  };
  export default function getOne(state = defaultUserState, action) {
    switch (action.type) {
      case ASL_LEFT:
        return {
          ...state,
          isLeft: true,
          title:action.payload
        };
      case ASL_ELLIPSIS:
        return {
          ...state,
          isLeft: false,
          title:defaultUserState.title
        };
      default:
        return state;
    }
  }
  