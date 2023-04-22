import {
  Alert,
  Anchor,
  Button,
  Flex,
  List,
  Switch,
  Modal,
  PasswordInput,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useLiveQuery } from "dexie-react-hooks";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { db } from "../db";
import { availableModels, defaultModel } from "../utils/constants";
import { checkOpenAIKey } from "../utils/openai";
import Locales, { changeLang, getAllLangs } from "../locales";

export function SettingsModal({ children }: { children: ReactElement }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [submitting, setSubmitting] = useState(false);

  const [value, setValue] = useState("");
  const [model, setModel] = useState(defaultModel);
  const [stream, setStream] = useState(false);

  const settings = useLiveQuery(async () => {
    return db.settings.where({ id: "general" }).first();
  });

  useEffect(() => {
    if (settings?.openAiApiKey) {
      setValue(settings.openAiApiKey);
    }
    if (settings?.openAiModel) {
      setModel(settings.openAiModel);
    }
    if (settings?.stream) {
      setStream(settings.stream);
    }
  }, [settings]);

  return (
    <>
      {cloneElement(children, { onClick: open })}
      <Modal
        opened={opened}
        onClose={close}
        title={Locales.Settings.Title}
        size="lg"
      >
        <Stack>
          <Flex gap="xs" align="end">
            <Text size="sm" weight="medium" sx={{ flex: 1 }}>
              {Locales.Settings.Stream}
            </Text>
            <Switch
              size="sm"
              checked={stream}
              onChange={(e) => {
                db.settings.where({ id: "general" }).modify((apiKey) => {
                  setStream(!e.target.checked);
                  apiKey.stream = !e.target.checked;
                });
              }}
            />
          </Flex>
          <Select
            label="Language"
            value={Locales.Language.value}
            onChange={(value) => changeLang(value as string)}
            withinPortal
            data={getAllLangs()}
          />
          <form
            onSubmit={async (event) => {
              try {
                setSubmitting(true);
                event.preventDefault();
                await checkOpenAIKey(value);
                await db.settings.where({ id: "general" }).modify((apiKey) => {
                  apiKey.openAiApiKey = value;
                  console.log(apiKey);
                });
                notifications.show({
                  title: Locales.Notification.Saved,
                  message: Locales.Notification.SavedKey,
                });
              } catch (error: any) {
                if (error.toJSON().message === "Network Error") {
                  notifications.show({
                    title: Locales.Notification.Error,
                    color: "red",
                    message: Locales.Notification.NetworkError,
                  });
                }
                const message = error.response?.data?.error?.message;
                if (message) {
                  notifications.show({
                    title: Locales.Notification.Error,
                    color: "red",
                    message,
                  });
                }
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <Flex gap="xs" align="end">
              <PasswordInput
                label="OpenAI API Key"
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                sx={{ flex: 1 }}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                formNoValidate
              />
              <Button type="submit" loading={submitting}>
                {Locales.Alert.Save}
              </Button>
            </Flex>
          </form>
          <List withPadding>
            <List.Item>
              <Text size="sm">
                <Anchor
                  href="https://platform.openai.com/account/api-keys"
                  target="_blank"
                >
                  {Locales.Settings.GetKey}
                </Anchor>
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" color="dimmed">
                {Locales.Settings.Prompt}
              </Text>
            </List.Item>
          </List>
          <Select
            label="OpenAI Model"
            value={model}
            onChange={(value) => {
              db.settings.update("general", {
                openAiModel: value ?? undefined,
              });
            }}
            withinPortal
            data={availableModels}
          />
          <Alert color="orange" title={Locales.Settings.Warning}>
            {Locales.Settings.WarningDescription}
          </Alert>
        </Stack>
      </Modal>
    </>
  );
}
