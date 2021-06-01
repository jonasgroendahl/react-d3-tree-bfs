import React from "react";
import Image from "next/image";
import { Box, List, ListItem, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { useRootStore } from "../stores/rootStore";
import { QuestionPopper } from "./QuestionPopper";

export const QuestionDrawer: React.FC = () => {
  const { questions } = useRootStore();

  return (
    <Box
      w={200}
      height={"100vh"}
      borderRight="solid 1px #eee"
      position="relative"
    >
      <Box my={2}>
        <Image
          src="https://xiliumvirtual.com/wp-content/uploads/2018/01/320x132.png"
          height={50}
          width={150}
        />
      </Box>
      <Stack direction="row" justifyContent="center">
        <QuestionPopper />
      </Stack>
      <List>
        {questions.map((question) => (
          <ListItem>{question.text}</ListItem>
        ))}
      </List>
    </Box>
  );
};
