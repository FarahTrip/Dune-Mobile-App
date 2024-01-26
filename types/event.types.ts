import { location } from "./location.types";

export type eventCardType = {
  id: string;
  name: string;
  longitute: number;
  latitude: number;
  imagePath: string;
  user?: string;
};
