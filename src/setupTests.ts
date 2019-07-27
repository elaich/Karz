import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const LocalStorageMock = (() => {
  let store: any = {};

  return {
    clear: () => {
      store = {};
    },

    getItem: (key: string) => {
      return store[key] || null;
    },

    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },

    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: LocalStorageMock
});
