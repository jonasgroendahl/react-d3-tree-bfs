import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import { uuid } from "uuidv4";
import { IQuestion } from "../stores/rootStore";

export function bfs(id: string, tree: RawNodeDatum, question: IQuestion) {
  const queue = [];

  console.log("q", question);

  const copyTree = { ...tree };

  queue.unshift(tree);

  let curNode;

  while (queue.length > 0) {
    curNode = queue.pop();
    console.log("looking at node", curNode);

    if (curNode.attributes.id === id) {
      curNode.children.push({
        attributes: {
          id: uuid(),
        },
        name: question.text,
        children: [],
      });

      return tree;
    }

    let len = curNode.children?.length;

    for (let i = 0; i < len; i++) {
      queue.unshift(curNode.children[i]);
    }
  }

  return null;
}
