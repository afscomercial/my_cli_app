const test = (ctx) => {
  ctx.body = {
    status: 'success',
    data: 'test',
  };
};

const webhook = (ctx) => {
  console.log('received webhook: ', ctx.state.webhook);
};

export const initControllers = {
  test,
  webhook,
};
