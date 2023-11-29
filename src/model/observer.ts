import { IObserver } from '@//types/bankCard';

export class Observer {
  private data: boolean;

  private observers: Set<IObserver> = new Set();

  constructor() {
    this.data = false;
  }

  addObserver(observer: IObserver) {
    this.observers.add(observer);
  }

  removeObserver(observer: IObserver) {
    this.observers.delete(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.data));
  }

  setData(data: boolean) {
    this.data = data;
    this.notifyObservers();
  }
}
