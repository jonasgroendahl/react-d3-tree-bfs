import Head from "next/head";
import styles from "../styles/Home.module.css";
import Question from "../components/Question";
import { Box, Stack } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import { QuestionDrawer } from "../components/QuestionDrawer";
import { TreeNodeEventCallback } from "react-d3-tree/lib/Tree/types";
import { useRootStore } from "../stores/rootStore";
import { bfs } from "../utils/helper";
import NodeModal from "../components/NodeModal";
import { useState } from "react";
import { TreeNodeDatum } from "react-d3-tree/lib/types/common";

const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});

export default function Home() {
  const { tree, setTree } = useRootStore();
  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const handleNodeClick = (event) => {
    //
  };

  return (
    <Stack direction="row" spacing="md">
      <QuestionDrawer />
      <div style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={tree}
          zoomable={true}
          onNodeClick={(datum, event) => {
            setNode(datum);
            setIsOpen(true);
          }}
        />
        <NodeModal node={node} onClose={close} isOpen={isOpen} />
      </div>
    </Stack>
  );
}
