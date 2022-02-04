import { ComponentStory, ComponentMeta } from "@storybook/react";
import InlineCta, { InlineCtaProps } from "./index";

export default {
  title: "CTA/Inline Cta",
  component: InlineCta,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof InlineCta>;

const Template: ComponentStory<typeof InlineCta> = (args: InlineCtaProps) => (
  <InlineCta {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  text: "button",
  disabled: false,
  loading: false,
  error: false,
};

export { Primary };
