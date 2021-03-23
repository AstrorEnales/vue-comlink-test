declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();

    public toUpperCase(text: string): string;
  }

  export default WebpackWorker;
}
