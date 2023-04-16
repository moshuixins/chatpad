import {
  Badge,
  Button,
  Center,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCloudDownload,
  IconCurrencyDollar,
  IconKey,
  IconLock,
  IconNorthStar,
} from "@tabler/icons-react";
import { useLiveQuery } from "dexie-react-hooks";
import { Logo } from "../components/Logo";
import { SettingsModal } from "../components/SettingsModal";
import { db } from "../db";
import Locales from "../locales";

export function IndexRoute() {
  const settings = useLiveQuery(() => db.settings.get("general"));
  const { openAiApiKey } = settings ?? {};

  return (
    <>
      <Center py="xl" sx={{ height: "100%" }}>
        <Container size="sm">
          <Badge mb="lg">{Locales.Features.Badge}</Badge>
          <Text>
            <Logo style={{ maxWidth: 240 }} />
          </Text>
          <Text mt={4} size="xl">
            {Locales.Features.MainDescription}
          </Text>
          <SimpleGrid
            mt={50}
            cols={3}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {features.map((feature) => (
              <div key={feature.title}>
                <ThemeIcon variant="outline" size={50} radius={50}>
                  <feature.icon size={26} stroke={1.5} />
                </ThemeIcon>
                <Text mt="sm" mb={7}>
                  {feature.title}
                </Text>
                <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
                  {feature.description}
                </Text>
              </div>
            ))}
          </SimpleGrid>
          <Group mt={50}>
            <SettingsModal>
              <Button
                size="md"
                variant={openAiApiKey ? "light" : "filled"}
                leftIcon={<IconKey size={20} />}
              >
                {openAiApiKey ? "Change OpenAI Key" : "Enter OpenAI Key"}
              </Button>
            </SettingsModal>
            {!window.todesktop && (
              <Button
                component="a"
                href="https://dl.todesktop.com/230313oyppkw40a"
                // href="https://download.chatpad.ai/"
                size="md"
                variant="outline"
                leftIcon={<IconCloudDownload size={20} />}
              >
                Download Desktop App
              </Button>
            )}
          </Group>
        </Container>
      </Center>
    </>
  );
}

const features = [
  {
    icon: IconCurrencyDollar,
    title: Locales.Features.Title1,
    description: Locales.Features.Description1,
  },
  {
    icon: IconLock,
    title: Locales.Features.Title2,
    description: Locales.Features.Description2,
  },
  {
    icon: IconNorthStar,
    title: Locales.Features.Title3,
    description: Locales.Features.Description3,
  },
];
