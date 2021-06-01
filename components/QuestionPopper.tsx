import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { AddIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useState } from "react";
import { IQuestion, useRootStore } from "../stores/rootStore";

const defaultQuestion = {
  type: "free-text",
  text: "",
};

export const QuestionPopper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const { createQuestion } = useRootStore();

  const [q, setQ] = useState<IQuestion>(defaultQuestion);

  const handleChange = (name: string, value: string) => {
    setQ((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    createQuestion(q);
    close();
    setQ(defaultQuestion);
  };

  return (
    <div>
      <Button
        size="sm"
        variant="outline"
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={open}
      >
        Question
      </Button>
      <Popover
        isOpen={isOpen}
        onClose={close}
        closeOnBlur={false}
        placement={"right-start"}
      >
        <PopoverTrigger>
          <Box
            pos="absolute"
            right={0}
            w={50}
            bg="red.100"
            height={2}
            top={1}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverHeader>Add question</PopoverHeader>
          <PopoverBody>
            <FormControl mb={5}>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                onChange={(val) => handleChange("type", val)}
                value={q.type}
              >
                <Stack direction="row">
                  <Radio value="free-text">Free text</Radio>
                  <Radio value="multiple-choice">Multiple choice</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Question text</FormLabel>
              <Input
                autoFocus={true}
                value={q.text}
                onChange={(event) => handleChange("text", event.target.value)}
                placeholder="Do you have headache symptomps?"
              />
            </FormControl>
            <Button onClick={handleAdd}>Add Question</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};
