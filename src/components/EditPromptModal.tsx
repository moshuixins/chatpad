import {
  ActionIcon,
  Button,
  Modal,
  Stack,
  Textarea,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconPencil } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { db, Prompt } from "../db";
import Locales from "../locales";

export function EditPromptModal({ prompt }: { prompt: Prompt }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [submitting, setSubmitting] = useState(false);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    setValue(prompt?.content ?? "");
    setTitle(prompt?.title ?? "");
  }, [prompt]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={Locales.Alert.EditPrompt}
        size="lg"
      >
        <form
          onSubmit={async (event) => {
            try {
              setSubmitting(true);
              event.preventDefault();
              await db.prompts.where({ id: prompt.id }).modify((chat) => {
                chat.title = title;
                chat.content = value;
              });
              notifications.show({
                title: Locales.Notification.Saved,
                message: Locales.Notification.UpdatedPrompt,
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
          <Stack>
            <TextInput
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.currentTarget.value)}
              formNoValidate
              data-autofocus
            />
            <Textarea
              label="Content"
              autosize
              minRows={5}
              maxRows={10}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <Button type="submit" loading={submitting}>
              {Locales.Alert.Save}
            </Button>
          </Stack>
        </form>
      </Modal>
      <Tooltip label={Locales.Alert.EditPrompt}>
        <ActionIcon size="lg" onClick={open}>
          <IconPencil size={20} />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
