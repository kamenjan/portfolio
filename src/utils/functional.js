module.exports = {
  pipe: (...fns) => arg => fns.reduce((composed, f) => f(composed), arg),
  pipeAsync: (...fns) => input =>
    fns.reduce((chain, f) => chain.then(f), Promise.resolve(input)),
  compose: (...fns) => arg =>
    fns.reduceRight((composed, f) => f(composed), arg),
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms)),
  logValue: value => {
    console.log(value)
    return value
  },
}
