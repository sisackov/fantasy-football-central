import { useEffect } from 'react';
import c3 from 'c3';

function C3Chart({ playerName, stats, chartType, chartId }) {
    const chartName = `chart-${chartId}-${chartType}`;
    useEffect(() => {
        c3.generate({
            bindto: `#${chartName}`,
            data: {
                columns: [
                    [playerName, ...Object.values(stats)],
                    ['League', 50, 20, 10, 40, 15, 25],
                ],
                type: 'bar',
            },
            axis: {
                x: {
                    type: 'category',
                    categories: Object.keys(stats),
                    show: false,
                },
            },
        });
    }, [stats, playerName, chartName]);

    return <div id={chartName} />;
}

export default C3Chart;
