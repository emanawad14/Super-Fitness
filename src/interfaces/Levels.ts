

export interface Level {
  _id: string;
  name: string;
}

export interface RootLevels {
  message: string;
  levels: Level[];
}