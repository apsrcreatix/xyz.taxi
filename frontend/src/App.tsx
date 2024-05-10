import {
  Flex,
  Text,
  Button,
  Theme,
  Container,
  Heading,
  TextField,
} from "@radix-ui/themes";
import useUserPreferrredTheme from "./hooks/useUserPreferredTheme";

function App() {
  const themeType = useUserPreferrredTheme();
  return (
    <Theme
      accentColor="iris"
      grayColor="sand"
      radius="full"
      appearance={themeType}
    >
      <Container className="emoji-background">
        <Flex
          maxHeight="100vh"
          height="100vh"
          width="100%"
          direction="column"
          gap="6"
          align="center"
          justify="center"
        >
          <Text color="gray" size="2" weight="bold">
            Coming Soon
          </Text>
          <Heading size="9">
            🚖 xyz <span style={{ color: "yellowgreen" }}>.</span>
            <span style={{ color: "gold" }}> Taxi</span> 🚕
          </Heading>
          <TextField.Root size="3" placeholder="We don't spam emails">
            <TextField.Slot side="right" px="1">
              <Button size="2">Get Early Access</Button>
            </TextField.Slot>
          </TextField.Root>
          <Text size="4">{`🚶🏽‍♂️‍➡️ Compare  👨🏽‍🚀 Select  🚀 Book`}</Text>
        </Flex>
      </Container>
    </Theme>
  );
}

export default App;
