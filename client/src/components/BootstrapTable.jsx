import { useCallback, useEffect, useState } from 'react';
import { fetchQueriedPlayers } from '../api/ffc-api';
import { hashCode } from '../utils/utils';

function BootstrapTable({ position, statsType }) {
    const [data, setData] = useState([]);
    const [sortedPlayers, setSortedPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchQueriedPlayers(
                    `position=${position}&limit=10`
                );
                setData(res);
                setSortedPlayers(res.slice(0, 10));
            } catch (e) {
                // setErrorMsg(e.message);
                console.error(e.message);
            }
        };

        fetchData();
    }, [position, statsType]);

    const getStatValue = useCallback(
        (player, stat) => {
            const stats = player.stats[0];
            if (!stats || !stats[statsType]) return 0;

            switch (stat) {
                case 'passingYards':
                    return stats[statsType].passingYards || 0;
                case 'passingTDs':
                    return stats[statsType].passingTouchdowns || 0;
                case 'interceptions':
                    return stats[statsType].interceptions || 0;
                case 'rushingYards':
                    return stats[statsType].rushingYards || 0;
                case 'rushingTDs':
                    return stats[statsType].rushingTouchdowns || 0;
                case 'receivingYards':
                    return stats[statsType].receivingYards || 0;
                case 'receivingTDs':
                    return stats[statsType].receivingTouchdowns || 0;
                case 'fumbles':
                    return stats[statsType].fumbles || 0;
                case 'fieldGoals':
                    return stats[statsType].fieldGoals || 0;
                case 'extraPoints':
                    return stats[statsType].extraPoints || 0;
                case 'fieldGoals50Plus':
                    return stats[statsType].fiftyYardsPlus || 0;
                case 'fantasyPoints':
                    return stats[statsType].fantasyScore || 0;
                default:
                    return 0;
            }
        },
        [statsType]
    );

    const renderBody = useCallback(() => {
        if (sortedPlayers.length === 0) return <div>Loading...</div>;
        return sortedPlayers.map((player) => {
            return (
                <tr key={hashCode(player.name)}>
                    {/* <th scope='row'>{index + 1}</th> */}
                    <td>{player.name}</td>
                    <td>{player.team}</td>
                    <td>{player.position}</td>
                    <td>{getStatValue(player, 'passingYards')}</td>
                    <td>{getStatValue(player, 'passingTDs')}</td>
                    <td>{getStatValue(player, 'interceptions')}</td>
                    <td>{getStatValue(player, 'rushingYards')}</td>
                    <td>{getStatValue(player, 'rushingTDs')}</td>
                    <td>{getStatValue(player, 'receivingYards')}</td>
                </tr>
            );
        });
    }, [sortedPlayers, getStatValue]);

    const sortTable = useCallback(
        (stat) => {
            console.log('sorting by', stat);
            const sorted = stat
                ? data.sort((a, b) => {
                      return getStatValue(b, stat) - getStatValue(a, stat);
                  })
                : data.sort((a, b) => a.name.localeCompare(b.name));
            setSortedPlayers(sorted);
        },
        [data, getStatValue]
    );

    return (
        <div className='table-responsive'>
            <table
                className='table table-striped table-hover'
                data-show-toggle='true'
            >
                <thead>
                    <tr>
                        {/* <th scope='col'>#</th> */}
                        <th scope='col'>Player</th>
                        <th onClick={sortTable} scope='col'>
                            Team
                        </th>
                        <th scope='col'>Position</th>
                        {/* <th scope='col'>Games</th>//todo: add games played */}
                        <th scope='col'>Passing Yards</th>
                        <th scope='col'>Passing TDs</th>
                        <th scope='col'>Interceptions</th>
                        <th scope='col'>Rushing Yards</th>
                        <th scope='col'>Rushing TDs</th>
                        <th scope='col'>Receiving Yards</th>
                    </tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </div>
    );
}

export default BootstrapTable;
