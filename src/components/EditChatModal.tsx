import { Button, Modal, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Chat, db } from "../db";
import Locales from "../locales";

export function EditChatModal({
  chat,
  children,
}: {
  chat: Chat;
  children: ReactElement;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [submitting, setSubmitting] = useState(false);

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(chat?.description ?? "");
  }, [chat]);

  return (
    <>
      {cloneElement(children, { onClick: open })}
      <Modal
        opened={opened}
        onClose={close}
        title={Locales.Alert.EditChat}
        withinPortal
      >
        <form
          onSubmit={async (event) => {
            try {
              setSubmitting(true);
              event.preventDefault();
              await db.chats.where({ id: chat.id }).modify((chat) => {
                chat.description = value;
              });
              notifications.show({
                title: Locales.Notification.Saved,
                message: "",
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
              label="Name"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              formNoValidate
              data-autofocus
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
