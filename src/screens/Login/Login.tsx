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
import ButtonSocialGoogle from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";

export default function Login() {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {"\n"} a Wallet App</Title>

          <Description>Entrar com redes sociais</Description>

          <ViewButton>
            <ButtonSocialGoogle title="Google" />
            <ButtonSocialGoogle title="Facebook" />
          </ViewButton>
        </ContentHeader>

        <ContentBody></ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
}
