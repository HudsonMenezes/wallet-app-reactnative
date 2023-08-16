import React from "react";
import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButton,
} from "./styles";
import { Text, SafeAreaView } from "react-native";
import theme from "../../styles/theme";

export default function Login() {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {"\n"} a Wallet App</Title>

          <Description>Entrar com redes sociais</Description>

          <ViewButton></ViewButton>
        </ContentHeader>

        <ContentBody></ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
}
