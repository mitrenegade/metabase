import React, { useRef } from "react";
import type { ComponentStory } from "@storybook/react";
import { checkNotNull } from "metabase/core/utils/types";
import { createMockDatabase } from "metabase-types/api/mocks";
import { createMockMetadata } from "__support__/metadata";
import { getHelpText } from "./ExpressionEditorTextfield/helper-text-strings";
import ExpressionEditorHelpText, {
  ExpressionEditorHelpTextProps,
} from "./ExpressionEditorHelpText";

export default {
  title: "Query Builder/ExpressionEditorHelpText",
  component: ExpressionEditorHelpText,
};

const Template: ComponentStory<typeof ExpressionEditorHelpText> = args => {
  const target = useRef(null);
  const database = createMockDatabase();
  const metadata = createMockMetadata({ databases: [database] });

  const props: ExpressionEditorHelpTextProps = {
    helpText: getHelpText(
      "datetime-diff",
      checkNotNull(metadata.database(database.id)),
      "UTC",
    ),
    width: 397,
    target,
  };

  return <ExpressionEditorHelpText {...props} />;
};

export const Default = Template;
