export type Lobby = {
  backgroundImage: string;
  backgroundMusic: string;
  slots: Slot[];
};

export type Slot = {
  id: number;
  image: string;
  isLocked: boolean;
  jackpot: number;
  name: string;
  order: number;
};
