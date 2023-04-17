import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { db } from "../db";
import Locales from "../locales";

export function DeleteAllDataModal({ onOpen }: { onOpen: () => void }) {
  const [opened, { open, close }] = useDisclosure(false, { onOpen });

  return (
    <>
      <Button
        onClick={open}
        variant="outline"
        color="red"
        leftIcon={<IconTrash size={20} />}
      >
        {Locales.Database.DeleteAll}
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title={Locales.Alert.DeleteData}
        size="md"
        withinPortal
      >
        <Stack>
          <Text size="sm">{Locales.Alert.DeleteAllConfirm}</Text>
          <Button
            onClick={async () => {
              await db.delete();
              localStorage.clear();
              window.location.assign("/");
            }}
            color="red"
          >
            {Locales.Alert.Delete}
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
