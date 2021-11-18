import React from "react";
import { View, Image } from "react-native";

const Filter1 = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight },
    },
    leftEyePosition,
    rightEyePosition,
  },
}) => {
  const glassesWidth = faceWidth;
  const glassesHeight = faceHeight / 3;

  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
        (rightEyePosition.x - leftEyePosition.x)
    )
  ) => (angleRad * 180) / Math.PI;

  return (
    <View
      style={{
        position: "absolute",
        left: leftEyePosition.x - glassesWidth * 0.675,
        top: leftEyePosition.y - glassesHeight * 0.5,
      }}
    >
      <Image
        source={require("../assets/Frapp-00.png")}
        style={{
          width: glassesWidth,
          height: glassesHeight,
          resizeMode: "contain",
          transform: [
            {
              rotate: `${transformAngle()}degree`,
            },
          ],
        }}
      />
    </View>
  );
};

export default Filter1;
