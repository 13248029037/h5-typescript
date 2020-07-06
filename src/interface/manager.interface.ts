export interface ISearchParams {
  page_no: number;
  page_size: number;
  user_name: string;
}
export interface IUserList {
  user_name: string;
  user_pswd: string;
  user_role: string[];
  user_team: string;
}
export interface Ires {
  data?: IUserList[];
  total: number;
}
export interface ISetRole {
  role_name: string[];
  user_name: string;
}
export interface ISetTeam {
  teamName: string;
  userName: string[];
}
export interface IManager {
  userList: IUserList[];
  total: number;
  searchUserList: (data: ISearchParams) => Promise<boolean>;
  setRole: (data: ISetRole) => Promise<boolean>;
  setTeam: (data: ISetTeam) => Promise<boolean>;
}
