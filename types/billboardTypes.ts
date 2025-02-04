export type billboardTypes = {
  id: string;
  x: number;
  y: number;
  photosTaken: number;
  advertiser: string;
  address: string;
  billboardText: string;
  image: string;
};

export type postInstructionsTypes = {
  billboards: billboardTypes[];
  instructions: string;
  success: boolean;
};
