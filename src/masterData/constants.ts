import { Dimensions } from "react-native";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const SKELETON_WIDTH = DEVICE_WIDTH - (16 * 2);
