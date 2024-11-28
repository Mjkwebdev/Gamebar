import create from "./httpService";
export interface Users {
    id: number;
    name: string;
  }

export default create('/users');