import { useCallback } from 'react';

function PlayerStatsTable({ position, totals, averages }) {
    const renderStatsTable = useCallback(() => {
        switch (position) {
            case 'QB':
                return (
                    <table className='table table-danger table-striped table-hover'>
                        <thead>
                            <tr>
                                <th scope='col'>Stats Type</th>
                                <th scope='col'>Fantasy Score</th>
                                <th scope='col'>Passing Attempts</th>
                                <th scope='col'>Completions</th>
                                <th scope='col'>Passing Yards</th>
                                <th scope='col'>Passing TDs</th>
                                <th scope='col'>Interceptions</th>
                                <th scope='col'>Fumbles</th>
                                <th scope='col'>Fumbles Lost</th>
                                <th scope='col'>QB Rating</th>
                                <th scope='col'>Rushing Attempts</th>
                                <th scope='col'>Rushing Yards</th>
                                <th scope='col'>Rushing TDs</th>
                                <th scope='col'>Sacks</th>
                                <th scope='col'>Sack Yards</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>Average</th>
                                <td>{averages.fantasyScore}</td>
                                <td>{averages.passingAttempts}</td>
                                <td>{averages.completions}</td>
                                <td>{averages.passingYards}</td>
                                <td>{averages.passingTouchdowns}</td>
                                <td>{averages.interceptions}</td>
                                <td>{averages.fumbles}</td>
                                <td>{averages.fumblesLost}</td>
                                <td>{averages.qbRating}</td>
                                <td>{averages.rushingAttempts}</td>
                                <td>{averages.rushingYards}</td>
                                <td>{averages.rushingTouchdowns}</td>
                                <td>{averages.sacks}</td>
                                <td>{averages.sackYards}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Total</th>
                                <td>{totals.fantasyScore}</td>
                                <td>{totals.passingAttempts}</td>
                                <td>{totals.completions}</td>
                                <td>{totals.passingYards}</td>
                                <td>{totals.passingTouchdowns}</td>
                                <td>{totals.interceptions}</td>
                                <td>{totals.fumbles}</td>
                                <td>{totals.fumblesLost}</td>
                                <td>{totals.qbRating}</td>
                                <td>{totals.rushingAttempts}</td>
                                <td>{totals.rushingYards}</td>
                                <td>{totals.rushingTouchdowns}</td>
                                <td>{totals.sacks}</td>
                                <td>{totals.sackYards}</td>
                            </tr>
                        </tbody>
                    </table>
                );
            default:
                return null;
        }
    }, [position, totals, averages]);

    return <div className='table-responsive'>{renderStatsTable()}</div>;
}

export default PlayerStatsTable;
