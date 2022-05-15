/* eslint-disable no-useless-constructor */
class LocalStorageKey {
  ACCESS_TOKEN = "ACCESS_TOKEN";

  USER_INFOR = "USER_INFOR";
}

class BaseStorage {
  key;

  constructor(_key) {
    this.key = _key;
  }

  set = (value) => {
    const dataString = JSON.stringify(value);
    localStorage.setItem(this.key, dataString);
  };

  get = () => {
    const dataString = localStorage.getItem(this.key);
    return !dataString ? null : JSON.parse(dataString);
  };

  remove = () => {
    localStorage.removeItem(this.key);
  };
}

class LocalStorageService extends LocalStorageKey {
  constructor() {
    super();
  }

  clearLocalStorage = () => {
    localStorage.clear();
  };
  /**
   * access token storage
   */

  accessToken = new BaseStorage(this.ACCESS_TOKEN);

  userInfor = new BaseStorage(this.USER_INFOR);
}

const localStorageServ = new LocalStorageService();

export default localStorageServ;
