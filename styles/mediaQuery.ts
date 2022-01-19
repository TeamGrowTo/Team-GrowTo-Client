import { deviceQuery } from "./Screen";

export const applyMediaQuery = (device: string) => `@media screen and ${deviceQuery[device]}`;
