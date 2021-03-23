import * as Comlink from 'comlink';

class WebpackWorker {
  public toUpperCase(text: string): string {
    return text.toUpperCase();
  }
}

Comlink.expose(new WebpackWorker());
