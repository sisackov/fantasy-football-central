import { useEffect } from 'react';
import c3 from 'c3';

function C3Chart({ playerName, stats, chartType, chartId, leagueAvg }) {
    const chartName = `chart-${chartId}-${chartType}`;
    useEffect(() => {
        c3.generate({
            bindto: `#${chartName}`,
            data: {
                columns: [
                    [playerName, ...Object.values(stats)],
                    ['League', ...Object.values(leagueAvg)],
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
    }, [stats, playerName, chartName, leagueAvg]);

    return <div id={chartName} />;
}

export default C3Chart;
