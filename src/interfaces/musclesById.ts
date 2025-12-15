export interface IMuscleID {
  _id: string;
  name: string;
  
  image: string;
}

export interface IMusclesByGroupResponseID {
  message: string;
  muscles: IMuscleID[];
}

