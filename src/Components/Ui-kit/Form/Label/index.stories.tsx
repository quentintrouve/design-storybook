import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label, { LabelProps } from "./index";

export default {
  title: "Label/Label input",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => (
  <Label {...args} />
);

const Basic = Template.bind({});

Basic.args = {
    text: "Label",
};

export { Basic };