import { useState, useEffect, useContext } from "react";
import { AppContext } from "../data/AppContext";
import isEmpty from "../utils/isEmpty";

export const useShowMessages = () => {
  const {
    conversationData: { data },
    setNeedsInputIndexes,
    showChat,
    setCurrentStep,
  } = useContext(AppContext);

  const [visibilityTree, setVisibilityTree] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    if (data && data.length < 1) {
      return;
    }
    // check if chat is open and if showMessages has already been calc'd; if not, run the operation
    if (showChat && isEmpty(visibilityTree)) {
      const needsInput: number[] = [];
      // iterate over conversation; reduce to object; set to true if msg0, else false.
      const messageVisibilityTree = data.reduce((acc, item, index) => {
        if (typeof item.answers === "string") {
          needsInput.push(index);
        }
        const key = `msg${index}`;
        return { ...acc, [key]: index ? false : true };
      }, {});
      setNeedsInputIndexes(needsInput);
      setVisibilityTree(messageVisibilityTree);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showChat, data]);

  const showNextMessage = (index: number) => {
    const next = index + 1;
    setVisibilityTree((prevState) => ({ ...prevState, [`msg${next}`]: true }));
    setCurrentStep(next);
  };

  return { visibilityTree, showNextMessage };
};
