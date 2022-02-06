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
                    `position=${position}&limit=20`
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
            // console.log(stats);
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

    const sortByStat = useCallback(
        (a, b, order, stat) => {
            const aStat = getStatValue(a, stat);
            const bStat = getStatValue(b, stat);
            if (order === 'desc') {
                return bStat - aStat;
            } else {
                return aStat - bStat;
            }
        },
        [getStatValue]
    );

    const renderHeaders = useCallback(() => {
        const options = {
            onSortChange: (column, order) => {
                console.log(column, order);
                const sorted = data.sort((a, b) =>
                    sortByStat(a, b, order, column)
                );
                console.log(sorted.map((p) => p.stats[0].averages));
                setSortedPlayers(sorted.slice(0, 10));
            },
            defaultSortName: 'fantasyPoints',
            defaultSortOrder: 'desc',
            sizePerPageList: [10],
            sizePerPage: 10,
            pageStartIndex: 1,
        };

        if (data.length === 0) return <div>Loading...</div>;
        switch (position) {
            case 'QB':
                return (
                    <BootstrapTable
                        data={sortedPlayers}
                        options={options}
                        striped
                        hover
                        version='4'
                    >
                        <TableHeaderColumn
                            width='120'
                            dataField='name'
                            dataSort
                            isKey
                        >
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataAlign='center'
                            width='120'
                            dataField='team'
                            dataSort
                        >
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='80'
                            dataAlign='center'
                            dataField='passingYards'
                            dataSort
                            dataFormat={(__, player) =>
                                getStatValue(player, 'passingYards')
                            }
                        >
                            Passing Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='80'
                            dataAlign='center'
                            dataField='passingTDs'
                            dataSort
                            dataFormat={(__, player) =>
                                getStatValue(player, 'passingTDs')
                            }
                        >
                            Passing TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='120'
                            dataAlign='center'
                            dataField='interceptions'
                            dataSort
                            dataFormat={(__, player) =>
                                getStatValue(player, 'interceptions')
                            }
                        >
                            Interceptions
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='80'
                            dataAlign='center'
                            dataField='fantasyPoints'
                            dataSort
                            defaultSorted
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fantasyPoints')
                            }
                        >
                            Fantasy Points
                        </TableHeaderColumn>
                    </BootstrapTable>
                );
            case 'WR':
                return (
                    <BootstrapTable data={data} striped hover>
                        <TableHeaderColumn
                            width='120'
                            dataField='name'
                            dataSort
                            isKey
                        >
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataAlign='center'
                            width='120'
                            dataField='team'
                            dataSort
                        >
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='100'
                            dataAlign='center'
                            dataField='receivingYards'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'receivingYards')
                            }
                        >
                            Receiving Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='100'
                            dataAlign='center'
                            dataField='receivingTDs'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'receivingTDs')
                            }
                        >
                            Receiving TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='100'
                            dataAlign='center'
                            dataField='fantasyPoints'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fantasyPoints')
                            }
                        >
                            Fantasy Points
                        </TableHeaderColumn>
                    </BootstrapTable>
                );
            case 'RB':
                return (
                    <BootstrapTable data={data} striped hover>
                        <TableHeaderColumn
                            width='120'
                            dataField='name'
                            dataSort
                            isKey
                        >
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataAlign='center'
                            width='120'
                            dataField='team'
                            dataSort
                        >
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            width='100'
                            dataAlign='center'
                            dataField='rushingYards'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'rushingYards')
                            }
                        >
                            Rushing Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='rushingTDs'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'rushingTDs')
                            }
                        >
                            Rushing TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='fumbles'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fumbles')
                            }
                        >
                            Fumbles
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='fantasyPoints'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fantasyPoints')
                            }
                        >
                            Fantasy Points
                        </TableHeaderColumn>
                    </BootstrapTable>
                );
            case 'TE':
                return (
                    <>
                        <TableHeaderColumn
                            width='120'
                            dataField='name'
                            dataSort
                            isKey
                        >
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataAlign='center'
                            width='120'
                            dataField='team'
                            dataSort
                        >
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='receivingYards'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'receivingYards')
                            }
                        >
                            Receiving Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='receivingTDs'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'receivingTDs')
                            }
                        >
                            Receiving TDs
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='rushingYards'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'rushingTDs')
                            }
                        >
                            Rushing Yards
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='fantasyPoints'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fantasyPoints')
                            }
                        >
                            Fantasy Points
                        </TableHeaderColumn>
                    </>
                );
            case 'PK':
                return (
                    <>
                        <TableHeaderColumn
                            width='120'
                            dataField='name'
                            dataSort
                            isKey
                        >
                            Name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataAlign='center'
                            width='120'
                            dataField='team'
                            dataSort
                        >
                            Team
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='fieldGoals'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'rushingTDs')
                            }
                        >
                            Field Goals
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='fieldGoals50Plus'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fieldGoals50Plus')
                            }
                        >
                            Field Goals 50+
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='extraPoints'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'extraPoints')
                            }
                        >
                            Extra Points
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='fantasyPoints'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fantasyPoints')
                            }
                        >
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
                        <TableHeaderColumn
                            dataField='fantasyPoints'
                            width='100'
                            dataAlign='center'
                            dataFormat={(__, player) =>
                                getStatValue(player, 'fantasyPoints')
                            }
                        >
                            Fantasy Points
                        </TableHeaderColumn>
                    </>
                );
        }
    }, [position, sortedPlayers, getStatValue, data, sortByStat]);

    return <div className='table-responsive'>{renderHeaders()}</div>;
}

export default ReactBootstrapTable;
