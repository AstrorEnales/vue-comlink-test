import * as Comlink from 'comlink';

class WebpackWorker {
  public async toUpperCase(text: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(text.toUpperCase());
      }, 5000);
    });
  }
}

Comlink.expose(new WebpackWorker());
