import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from ".";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "test",
    tabs: [
      {
        defaultChecked: true,
        nav: "Tab1",
        content: <>Content1</>,
      },
      {
        nav: "Tab2",
        content: <>Content2</>,
      },
      {
        nav: "Tab3",
        content: <>Content3</>,
      },
    ],
  },
};
