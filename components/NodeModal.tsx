import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (txt: string) => void;
};

const NodeModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [txt, setTxt] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add family member</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={txt}
              onChange={(event) => setTxt(event.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            color="blue.500"
            variant="solid"
            onClick={() => onSubmit(txt)}
            disabled={!txt}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NodeModal;
