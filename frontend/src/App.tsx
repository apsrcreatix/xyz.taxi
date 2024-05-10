import { Flex, Text, Button, Theme, Container } from "@radix-ui/themes";
import useUserPreferrredTheme from "./hooks/useUserPreferredTheme";

function App() {
  const themeType = useUserPreferrredTheme();
  return (
    <Theme
      accentColor="iris"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance={themeType}
    >
      <Container>
        <Flex direction="column" gap="2">
          <Text>Coming Soon</Text>
          <Text>🚖 XYZ Taxi 🚕</Text>
          <div className="card">
            <Button
              onClick={() =>
                alert(
                  "Oops! Sorry, we are full at this time, we are working on it and will get back to you soon!"
                )
              }
            >
              Request Access
            </Button>
            <Text>🧪 Compare, 💅🏼 Select, ✅ Book</Text>
          </div>
        </Flex>
      </Container>
    </Theme>
  );
}

export default App;
