import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";

interface TextPopProps {
  style?: TextStyle;
  children: ReactNode;
  className?: any;
}

const TextPop: React.FC<TextPopProps> = ({ style, children, className }) => (
  <Text
    className={className}
    style={[style, { fontFamily: "Poppins_400Regular" }]}
  >
    {children}
  </Text>
);

export default TextPop;
