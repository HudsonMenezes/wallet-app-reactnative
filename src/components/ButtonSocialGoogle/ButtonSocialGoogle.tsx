import React from "react";
import { Button, IconeGoogle } from "./styles";
import PngGoogle from "../../assets/google.png";
import { RectButtonProps } from "react-native-gesture-handler";
import { Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

export default function ButtonSocialGoogle({ title, ...rest }: Props) {
  return (
    <Button>
      <IconeGoogle source={PngGoogle} resizeMode="contain" />
      <Title>{title}</Title>
    </Button>
  );
}
