import pino from 'pino';
const dev = process.env.NODE_ENV !== 'production';
const log = pino({
  timestamp: () => {
    return pino.stdTimeFunctions.isoTime();
  },
  prettyPrint: dev,
});
var countMap = new Map();

function countLog(name) {
  if (countMap.has(name)) {
    let count = countMap.get(name);
    countMap.set(name, { value: ++count.value });
  } else {
    countMap.set(countMap.set(name, { value: 1 }));
  }
  log.info(`> ${name} event # : ${countMap.get(name).value}`);
}

export const status = (ctx) => {
  log.info(`> Status ALIVE`);
  ctx.body = {
    status: 'success',
    data: 'data',
  };
};

export const webhook = (ctx) => {
  console.log('received webhook: ', ctx.state.webhook);
  if (dev) {
    countLog('PRODUCTS_CREATE');
  }
};
