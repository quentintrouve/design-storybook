import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText, { InputTextProps } from "./index";

export default {
  title: "Inputs/Input Text",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args: InputTextProps) => (
  <InputText {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  label: "Label",
  name: "Input Name",
  placeholder: "Placeholder",
  disabled: false,
  required: false,
  error: false,
};

export { Primary };