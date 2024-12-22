import { Dimensions, PixelRatio, Platform } from "react-native";
import { identifiers } from "../constants";

const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
// const moderateScale = (size: number, factor = 1) => size + 2;
const normalize = (size: number) => {
  const newSize = size * (width / 320);
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
const updateSizeByWidth = ({ small, normal, large }: any): number => {
  console.log("device width in px==>", width, height);
  if (width < identifiers.screenSize.small) {
    return small;
  } else if (width > identifiers.screenSize.large) {
    return large || normal;
  }
  return normal;
};
export {
  scale,
  verticalScale,
  moderateScale,
  screenSize,
  normalize,
  updateSizeByWidth,
  width,
};
