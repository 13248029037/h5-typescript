import { observable, action } from "mobx";
import * as api from "../api";
import {
  ISearchParams,
  IUserList,
  Ires,
  ISetRole,
  ISetTeam,
} from "src/interface/manager.interface";
class Store {
  @observable public userList: IUserList[] = [];
  @observable public total: number = 0;
  @action public async searchUserList(data: ISearchParams) {
    try {
      const result: Ires = await api.userList<Ires>(data);
      this.userList = result.data || [];
      this.total = result.total || 0;
      return true;
    } catch (error) {
      return false;
    }
  }
  @action public async setRole(data: ISetRole) {
    try {
      await api.setforuser(data);
      return true;
    } catch (error) {
      return false;
    }
  }
  @action public async setTeam(data: ISetTeam) {
    try {
      await api.setTeam(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default new Store();
