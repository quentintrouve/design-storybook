import { ComponentStory, ComponentMeta } from "@storybook/react";
import SquaredCta, { SquaredCtaProps } from "./index";

export default {
  title: "Cta/Squared Cta",
  component: SquaredCta,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SquaredCta>;

const Template: ComponentStory<typeof SquaredCta> = (args: SquaredCtaProps) => (
  <SquaredCta {...args} />
);

const Primary = Template.bind({});
const Secondary = Template.bind({});

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

export { Primary, Secondary };
