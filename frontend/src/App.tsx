import {
  Flex,
  Text,
  Button,
  Theme,
  Container,
  Heading,
  TextField,
  Avatar,
  Separator,
} from "@radix-ui/themes";
import useUserPreferrredTheme from "./hooks/useUserPreferredTheme";
import React from "react";

function App() {
  const themeType = useUserPreferrredTheme();
  return (
    <Theme
      accentColor="iris"
      grayColor="olive"
      radius="full"
      appearance={themeType}
    >
      <Container maxHeight="100vh" height="101vh" className="emoji-background">
        <Flex
          width="100%"
          direction="column"
          gap="6"
          align="center"
          justify="center"
          height="100%"
        >
          <Text color="gray" size="2" weight="bold">
            Launching soon 🦖
          </Text>
          <Heading size="9">
            🚖 xyz <span style={{ color: "yellowgreen" }}>.</span>
            <span style={{ color: "gold" }}> Taxi</span> 🚕
          </Heading>
          <TextField.Root
            type="email"
            autoComplete="true"
            autoFocus={true}
            size="3"
            placeholder="We don't spam emails"
          >
            <TextField.Slot side="right" px="1">
              <Button size="2">Get Early Access</Button>
            </TextField.Slot>
          </TextField.Root>
          <Flex align="center">
            <Text>Join 5k exclusive early birds </Text>
            <Flex>
              {Array(5)
                .fill(0)
                .map((element, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Avatar
                        src={`https://100k-faces.glitch.me/random-image?test=${index}`}
                        fallback="A"
                        size="1"
                        ml={index === 0 ? "1" : "-1"}
                      />
                    </React.Fragment>
                  );
                })}

              <Avatar
                fallback="1k+"
                size="1"
                ml="-2"
                variant="solid"
                style={{ fontSize: "0.625rem" }}
              />
            </Flex>
          </Flex>
          <Flex gap={"4"}>
            🚶🏽‍♂️‍➡️ Compare <Separator orientation="vertical" />
            👨🏽‍🚀 Select <Separator orientation="vertical" />
            🚀 Book
          </Flex>
        </Flex>
      </Container>
    </Theme>
  );
}

export default App;
