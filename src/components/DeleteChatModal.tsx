import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "@tanstack/react-location";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Chat, db } from "../db";
import { useApiKey } from "../hooks/useApiKey";
import { useChatId } from "../hooks/useChatId";
import Locales from "../locales";

export function DeleteChatModal({
  chat,
  children,
}: {
  chat: Chat;
  children: ReactElement;
}) {
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
      {cloneElement(children, { onClick: open })}
      <Modal opened={opened} onClose={close} title={Locales.Alert.DeleteChat}>
        <form
          onSubmit={async (event) => {
            try {
              setSubmitting(true);
              event.preventDefault();
              await db.chats.where({ id: chat.id }).delete();
              await db.messages.where({ chatId: chat.id }).delete();
              if (chatId === chat.id) {
                navigate({ to: `/` });
              }
              close();

              notifications.show({
                title: Locales.Notification.Deleted,
                message: Locales.Notification.DeletedChat,
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
                  message: Locales.Notification.DeleteChatError,
                });
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <Stack>
            <Text size="sm">{Locales.Alert.DeleteChatConfirm}</Text>
            <Button type="submit" color="red" loading={submitting}>
              {Locales.Alert.Delete}
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
