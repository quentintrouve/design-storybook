import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox, { CheckBoxProps } from "./index";

export default {
  title: "Inputs/Checkbox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args: CheckBoxProps) => (
  <CheckBox {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  label: "Se souvenir du mot de passe",
  name: "checkbox",
  id: "checkbox",
  error: false,
  disabled: false,
};

export { Primary };
