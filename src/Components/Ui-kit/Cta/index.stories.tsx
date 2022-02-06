import { ComponentStory, ComponentMeta } from "@storybook/react";
import Cta, { CtaProps } from "./index";

export default {
  title: "Cta",
  component: Cta,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Cta>;

const Template: ComponentStory<typeof Cta> = (args: CtaProps) => (
  <Cta {...args} />
);

const Primary = Template.bind({});
const Secondary = Template.bind({});
const Inline = Template.bind({});

Primary.args = {
  variant: "primary",
  text: "submit",
  disabled: false,
  loading: false,
  error: false,
};

Secondary.args = {
  variant: "secondary",
  text: "submit",
  disabled: false,
  loading: false,
  error: false,
};
Inline.args = {
  variant: "inline",
  text: "submit",
  disabled: false,
  loading: false,
  error: false,
};

export { Primary, Secondary, Inline };
