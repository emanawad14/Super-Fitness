export interface IMuscle {
  _id: string;
  name: string;
 
}


export interface IMusclesResponse {
  message: string;
  musclesGroup: IMuscle[];
}
