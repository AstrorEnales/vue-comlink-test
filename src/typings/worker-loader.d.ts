declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();

    public async toUpperCase(text: string): Promise<string>;
  }

  export default WebpackWorker;
}
