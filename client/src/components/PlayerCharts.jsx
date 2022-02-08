import { useEffect } from 'react';
import C3Chart from './C3Chart';

function PlayerCharts({ data, leagueAvg }) {
    useEffect(() => {
        console.log('PlayerCharts', leagueAvg);
    }, [data, leagueAvg]);

    return (
        <div className='card-body'>
            <div className='col'>
                <h3 className='text-center my-2'>Total</h3>
                <C3Chart
                    playerName={data.name}
                    stats={data.stats[0].totals}
                    chartType='total'
                    chartId={data.espnId}
                    leagueAvg={leagueAvg.totals}
                />
            </div>
            <div className='col'>
                <h3 className='text-center my-3'>Average</h3>
                <C3Chart
                    playerName={data.name}
                    stats={data.stats[0].averages}
                    chartType='average'
                    chartId={data.espnId}
                    leagueAvg={leagueAvg.averages}
                />
            </div>
        </div>
    );
}

export default PlayerCharts;
