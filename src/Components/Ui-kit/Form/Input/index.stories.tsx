import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { InputProps } from "./index";

export default {
  title: "Inputs/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ margin: "100px auto", width: "400px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

const Text = Template.bind({});
const Mail = Template.bind({});
const Password = Template.bind({});

Text.args = {
  type: "text",
  name: "text",
  placeholder: "Type something",
  label: "This is a label",
  required: true,
  disabled: false,
  id: "text",
  getValue: (value) => console.log(value),
};

Mail.args = {
  type: "email",
  name: "email",
  placeholder: "Enter yout email adress",
  label: "Email",
  required: true,
  disabled: false,
  id: "mail",
  getValue: (value) => console.log(value),
};

Password.args = {
  type: "password",
  name: "password",
  placeholder: "•••••••••••••",
  label: "Your password",
  required: true,
  disabled: false,
  id: "password",
  getValue: (value) => console.log(value),
};

export { Text, Mail, Password };
