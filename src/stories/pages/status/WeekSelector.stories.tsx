import { Meta, StoryObj } from "@storybook/react";
import WeekSelector from "@/pages/status/WeekSelector";
import { useState } from "react";

const meta: Meta= {
    title: "Status/WeekSelector",
    component: WeekSelector,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof WeekSelector>;

export const Default: Story = {
    render: () => {
        const [selectedWeek, setSelectedWeek] = useState("11월 1주차");

        return (
                <WeekSelector onChange={setSelectedWeek} />
        );
    },
};
