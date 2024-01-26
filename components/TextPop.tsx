import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { OutlinedTextView } from "react-native-outlined-text";

interface TextPopProps {
  style?: TextStyle;
  children: ReactNode;
  className?: any;
  numberOfLines?: any;
}

const TextPop: React.FC<TextPopProps> = ({
  style,
  children,
  className,
  numberOfLines,
}) => (
  <Text
    className={className}
    style={[
      style,
      {
        fontFamily: "Poppins_400Regular",
      },
    ]}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);

export default TextPop;
