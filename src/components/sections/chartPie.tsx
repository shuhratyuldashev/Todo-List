import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { browser: "Выполненные задачи", tasks: 375, fill: "#444" },
    { browser: "Не выполненные задачи", tasks: 200, fill: "#888" },
    { browser: "Архивированные задачи", tasks: 287, fill: "#DEDEDE" },
    { browser: "Пропущенные задачи", tasks: 73, fill: "#FC3000" },
];

const chartConfig = {
    tasks: {
        label: "Все задачи",
        color: "#444",
    },
} satisfies ChartConfig;

const ChartPie = () => {
    return (
        <div className="m-0 grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 lg:grid-cols-3">
            <Card className="duration-500 hover:shadow-lg">
                <CardContent>
                    <CardHeader className="text-center">
                        <CardTitle>Статистика всех ваших задач</CardTitle>
                    </CardHeader>
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square"                    
                        >
                        <PieChart height={400} width={400}>
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Pie
                                data={chartData}
                                dataKey="tasks"
                                nameKey="browser"
                                innerRadius={60}
                                outerRadius={90}
                                strokeWidth={5}
                            >
                                <Label
                                    content={(propsChart: {
                                        viewBox?: {
                                            cx: number;
                                            cy: number;
                                        };
                                    }) => {
                                        const { viewBox } = propsChart;
                                        if (viewBox?.cx && viewBox?.cy) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-3xl font-bold"
                                                    >
                                                        100
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Задач
                                                    </tspan>
                                                </text>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartPie;
