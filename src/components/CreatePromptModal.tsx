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
import { IconPlaylistAdd, IconPlus } from "@tabler/icons-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { db } from "../db";
import Locales from "../locales";

export function CreatePromptModal({ content }: { content?: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [submitting, setSubmitting] = useState(false);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    setValue(content ?? "");
  }, [content]);

  return (
    <>
      {content ? (
        <Tooltip label="Save Prompt" position="left">
          <ActionIcon onClick={open}>
            <IconPlaylistAdd opacity={0.5} size={20} />
          </ActionIcon>
        </Tooltip>
      ) : (
        <Button fullWidth onClick={open} leftIcon={<IconPlus size={20} />}>
          {Locales.Home.NewPrompt}
        </Button>
      )}
      <Modal
        opened={opened}
        onClose={close}
        title={Locales.Alert.CreatePrompt}
        size="lg"
      >
        <form
          onSubmit={async (event) => {
            try {
              setSubmitting(true);
              event.preventDefault();
              const id = nanoid();
              db.prompts.add({
                id,
                title,
                content: value,
                createdAt: new Date(),
              });
              notifications.show({
                title: Locales.Notification.Saved,
                message: Locales.Notification.CreatedPrompt,
              });
              close();
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
              placeholder="Content"
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
    </>
  );
}
