import { useEffect } from 'react';
import c3 from 'c3';

function C3Chart({ playerName, stats }) {
    // console.log('C3Chart', Object.values(stats));
    useEffect(() => {
        c3.generate({
            bindto: '#chart',
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
    }, []);

    return <div id='chart' />;
}

export default C3Chart;
