/* eslint-disable no-console */
class Logger {
  constructor(tag, Verbose = false) {
    this.tag = `[${tag}]`;
    this.Verbose = Verbose;
  }

  get info() {
    return this.log;
  }

  log(...args) {
    console.log(this.tag, ...args);
  }

  debug(...args) {
    if (this.Verbose) console.debug(this.tag, ...args);
  }

  error(...args) {
    console.error(this.tag, ...args);
  }
}

function newLogger(tag, verbose = false) {
  return new Logger(tag, verbose);
}

export default newLogger;
