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
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";
import { TreeNodeDatum } from "react-d3-tree/lib/types/common";
import { useRootStore } from "../stores/rootStore";
import { bfs } from "../utils/helper";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  node: TreeNodeDatum;
};

const NodeModal: React.FC<Props> = ({ isOpen, onClose, node }) => {
  const { questions, setTree, tree } = useRootStore();
  const [option, setOption] = useState();

  const handleDone = () => {
    const newTree = bfs(node.attributes.id, tree, JSON.parse(option));

    console.log(newTree);

    setTree({ ...newTree });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select
            placeholder="Select option"
            onChange={(event) => {
              console.log("opt", event.target.value);
              setOption(event.target.value);
            }}
          >
            {questions.map((q) => (
              <option value={JSON.stringify(q)} key={q.text}>
                {q.text}
              </option>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleDone}>Done</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NodeModal;
