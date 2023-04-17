import { ActionIcon, Button, Modal, Stack, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconTrash } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import { db, Prompt } from "../db";
import { useApiKey } from "../hooks/useApiKey";
import { useChatId } from "../hooks/useChatId";
import Locales from "../locales";

export function DeletePromptModal({ prompt }: { prompt: Prompt }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [submitting, setSubmitting] = useState(false);

  const [key, setKey] = useApiKey();

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(key);
  }, [key]);
  const chatId = useChatId();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={Locales.Alert.DeletePrompt}
        size="md"
      >
        <form
          onSubmit={async (event) => {
            try {
              setSubmitting(true);
              event.preventDefault();
              await db.prompts.where({ id: prompt.id }).delete();
              close();

              notifications.show({
                title: Locales.Notification.Deleted,
                message: Locales.Notification.DeletedPrompt,
              });
            } catch (error: any) {
              if (error.toJSON().message === "Network Error") {
                notifications.show({
                  title: Locales.Notification.Error,
                  color: "red",
                  message: Locales.Notification.NetworkError,
                });
              } else {
                notifications.show({
                  title: Locales.Notification.Error,
                  color: "red",
                  message: Locales.Notification.DeletePromptError,
                });
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <Stack>
            <Text size="sm">{Locales.Alert.DeletePromptConfirm}</Text>
            <Button type="submit" color="red" loading={submitting}>
              {Locales.Alert.Delete}
            </Button>
          </Stack>
        </form>
      </Modal>
      <Tooltip label={Locales.Alert.DeletePrompt}>
        <ActionIcon color="red" size="lg" onClick={open}>
          <IconTrash size={20} />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
