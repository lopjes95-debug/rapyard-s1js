import { S1JS } from "./s1js";
import { S2 } from "./s2";
import { S3 } from "./s3";

export const Seasons = {
  S1JS,
  S2,
  S3
};

export type SeasonName = keyof typeof Seasons;
