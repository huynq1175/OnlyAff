import Stack from '@libs/navigation/stack';
import {I18nManager} from 'react-native';

export default class NavigationStack {
  private readonly _initialStackIds: string[];
  private _currentStack: number;
  set currentStack(value: number) {
    if (value === this._currentStack) {
      this.clear();
    }
    this._currentStack = value;
  }
  get currentStack(): number {
    return this._currentStack;
  }

  private readonly stack: Array<Stack<string>>;

  constructor(stack: string[]) {
    this._currentStack = I18nManager.isRTL ? stack.length - 1 : 0;
    this._initialStackIds = stack;
    this.stack = stack.map(value => new Stack(value));
  }

  push(value: string): number {
    return this.stack[this._currentStack].push(value);
  }

  pop(): string | undefined {
    if (this.stack[this._currentStack].length > 1) {
      return this.stack[this.currentStack].pop();
    }
    return undefined;
  }

  clear() {
    this.stack[this._currentStack] = new Stack(
      this._initialStackIds[this._currentStack]
    );
  }

  first(): string {
    return this.stack[this._currentStack].first() || '';
  }

  peek(): string | undefined {
    return this.stack[this._currentStack].peek();
  }

  take(): string | undefined {
    return this.stack[this._currentStack].take();
  }

  get length(): number {
    return this.stack[this._currentStack].length;
  }
}
