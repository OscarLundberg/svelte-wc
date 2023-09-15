import type { Meta, StoryObj } from '@storybook/svelte';

import LstLabel from './LstLabel.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'LstLabel',
  component: LstLabel,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<LstLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
