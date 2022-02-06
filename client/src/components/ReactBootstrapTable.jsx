import { useCallback, useEffect, useState } from 'react';
import { fetchQueriedPlayers } from '../api/ffc-api';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function ReactBootstrapTable({ position, statsType }) {
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
            console.log(player.stats[0]);
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

    const renderHeaders = useCallback(() => {
        if (data.length === 0) return <div>Loading...</div>;
        switch (position) {
            case 'QB':
                return (
                    <BootstrapTable data={data} striped hover>
                        <TableHeaderColumn dataField='name' dataSort isKey>
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='team' dataSort>
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='passingYards'
                            dataSort
                            dataFormat={(__, player) =>
                                getStatValue(player, 'passingYards')
                            }
                        >
                            Passing Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='passingTDs'>
                            Passing TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='interceptions'>
                            Interceptions
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fantasyPoints'>
                            Fantasy Points
                        </TableHeaderColumn>
                    </BootstrapTable>
                );
            case 'WR':
                return (
                    <BootstrapTable data={data} striped hover>
                        <TableHeaderColumn dataField='name' dataSort isKey>
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='team' dataSort>
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='receivingYards'>
                            Receiving Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='receivingTDs'>
                            Receiving TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fantasyPoints'>
                            Fantasy Points
                        </TableHeaderColumn>
                    </BootstrapTable>
                );
            case 'RB':
                return (
                    <BootstrapTable data={data} striped hover>
                        <TableHeaderColumn dataField='name' dataSort isKey>
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='team' dataSort>
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='rushingYards'>
                            Rushing Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='rushingTDs'>
                            Rushing TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fumbles'>
                            Fumbles
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fantasyPoints'>
                            Fantasy Points
                        </TableHeaderColumn>
                    </BootstrapTable>
                );
            case 'TE':
                return (
                    <>
                        <TableHeaderColumn dataField='name' dataSort isKey>
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='team' dataSort>
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='receivingYards'>
                            Receiving Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='receivingTDs'>
                            Receiving TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='rushingYards'>
                            Rushing Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fantasyPoints'>
                            Fantasy Points
                        </TableHeaderColumn>
                    </>
                );
            case 'PK':
                return (
                    <>
                        <TableHeaderColumn dataField='name' dataSort isKey>
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='team' dataSort>
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fieldGoals'>
                            Field Goals
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fieldGoals50Plus'>
                            Field Goals 50+
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='extraPoints'>
                            Extra Points
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fantasyPoints'>
                            Fantasy Points
                        </TableHeaderColumn>
                    </>
                );
            default:
                return (
                    <>
                        <TableHeaderColumn dataField='name' dataSort isKey>
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='team' dataSort>
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='fantasyPoints'>
                            Fantasy Points
                        </TableHeaderColumn>
                    </>
                );
        }
    }, [position, data]);

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
            {/* <BootstrapTable data={data} striped hover> */}
            {renderHeaders()}
            {/* <TableHeaderColumn dataField='name' dataSort isKey>
                    Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField='team'>Team</TableHeaderColumn>
                <TableHeaderColumn dataField='position'>
                    Position
                </TableHeaderColumn>
                <TableHeaderColumn dataField='passingYards'>
                    Passing Yards
                </TableHeaderColumn>
                <TableHeaderColumn dataField='passingTDs'>
                    Passing TDs
                </TableHeaderColumn>
                <TableHeaderColumn dataField='interceptions'>
                    Interceptions
                </TableHeaderColumn>
                <TableHeaderColumn dataField='rushingYards'>
                    Rushing Yards
                </TableHeaderColumn>
                <TableHeaderColumn dataField='rushingTDs'>
                    Rushing TDs
                </TableHeaderColumn>
                <TableHeaderColumn dataField='receivingYards'>
                    Receiving Yards
                </TableHeaderColumn>
                <TableHeaderColumn dataField='receivingTDs'>
                    Receiving TDs
                </TableHeaderColumn>
                <TableHeaderColumn dataField='fumbles'>
                    Fumbles
                </TableHeaderColumn>
                <TableHeaderColumn dataField='fieldGoals'>
                    Field Goals
                </TableHeaderColumn>
                <TableHeaderColumn dataField='extraPoints'>
                    Extra Points
                </TableHeaderColumn>
                <TableHeaderColumn dataField='fieldGoals50Plus'>
                    Field Goals 50+
                </TableHeaderColumn>
                <TableHeaderColumn dataField='fantasyPoints'>
                    Fantasy Points
                </TableHeaderColumn> */}
            {/* </BootstrapTable> */}
        </div>
    );
}

export default ReactBootstrapTable;
