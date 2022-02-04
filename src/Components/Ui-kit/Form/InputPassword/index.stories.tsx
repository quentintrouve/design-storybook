import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputPassword, { InputPasswordProps } from "./index";

export default {
  title: "Inputs/Input Password",
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args: InputPasswordProps) => (
  <InputPassword {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  label: "Mot de passe",
  name: "Input Name",
  placeholder: "Mot de passe",
  disabled: false,
  required: false,
  error: false,
};

export { Primary };
