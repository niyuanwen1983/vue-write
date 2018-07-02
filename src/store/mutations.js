const mutations = {
  //更新数据
  updateWrong(state, param) {
    state.sum = param.sum;
    state.wrong = state.wrong + param.wrong;
    state.right = state.sum - state.wrong;
  }
};
export default mutations;
