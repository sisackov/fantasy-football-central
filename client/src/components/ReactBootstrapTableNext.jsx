import { useCallback, useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

function ReactBootstrapTableNext({ position, statsType, playersData }) {
    const [data, setData] = useState([]);
    const [sortedPlayers, setSortedPlayers] = useState([]);

    useEffect(() => {
        setData(playersData);
        setSortedPlayers(playersData.slice(0, 10));
    }, [playersData]);

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

    const sortTable = useCallback(
        (order, stat) => {
            const sortedData = data.sort((a, b) =>
                sortByStat(a, b, order, stat)
            );
            setSortedPlayers(sortedData.slice(0, 10));
        },
        [data, sortByStat]
    );

    const getColumns = useCallback(() => {
        switch (position) {
            case 'QB':
                return [
                    {
                        dataField: 'name',
                        text: 'Name',
                        sort: true,
                    },
                    {
                        dataField: `stats[0][${statsType}].passingYards`,
                        text: 'Passing Yards',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'passingYards'),
                    },
                    {
                        dataField: `stats[0][${statsType}].passingTouchdowns`,
                        text: 'Passing TDs',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'passingTDs'),
                    },
                    {
                        dataField: `stats[0][${statsType}].interceptions`,
                        text: 'Interceptions',
                        sort: true,
                        onSort: (__, order) =>
                            sortTable(order, 'interceptions'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fantasyScore`,
                        text: 'Fantasy Points',
                        sort: true,
                        defaultSort: 'desc',
                        onSort: (__, order) =>
                            sortTable(order, 'fantasyPoints'),
                    },
                ];
            case 'RB':
                return [
                    {
                        dataField: 'name',
                        text: 'Name',
                        sort: true,
                    },
                    {
                        dataField: `stats[0][${statsType}].rushingYards`,
                        text: 'Rushing Yards',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'rushingYards'),
                    },
                    {
                        dataField: `stats[0][${statsType}].rushingTouchdowns`,
                        text: 'Rushing TDs',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'rushingTDs'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fumbles`,
                        text: 'Fumbles',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'fumbles'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fantasyScore`,
                        text: 'Fantasy Points',
                        sort: true,
                        defaultSort: 'desc',
                        onSort: (__, order) =>
                            sortTable(order, 'fantasyPoints'),
                    },
                ];
            case 'WR':
                return [
                    {
                        dataField: 'name',
                        text: 'Name',
                        sort: true,
                    },
                    {
                        dataField: `stats[0][${statsType}].receivingYards`,
                        text: 'Receiving Yards',
                        sort: true,
                        onSort: (__, order) =>
                            sortTable(order, 'receivingYards'),
                    },
                    {
                        dataField: `stats[0][${statsType}].receivingTouchdowns`,
                        text: 'Receiving TDs',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'receivingTDs'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fumbles`,
                        text: 'Fumbles',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'fumbles'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fantasyScore`,
                        text: 'Fantasy Points',
                        sort: true,
                        defaultSort: 'desc',
                        onSort: (__, order) =>
                            sortTable(order, 'fantasyPoints'),
                    },
                ];
            case 'TE':
                return [
                    {
                        dataField: 'name',
                        text: 'Name',
                        sort: true,
                    },
                    {
                        dataField: `stats[0][${statsType}].receivingYards`,
                        text: 'Receiving Yards',
                        sort: true,
                        onSort: (__, order) =>
                            sortTable(order, 'receivingYards'),
                    },
                    {
                        dataField: `stats[0][${statsType}].receivingTouchdowns`,
                        text: 'Receiving TDs',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'receivingTDs'),
                    },
                    {
                        dataField: `stats[0][${statsType}].rushingYards`,
                        text: 'Rushing Yards',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'rushingYards'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fantasyScore`,
                        text: 'Fantasy Points',
                        sort: true,
                        defaultSort: 'desc',
                        onSort: (__, order) =>
                            sortTable(order, 'fantasyPoints'),
                    },
                ];
            case 'PK':
                return [
                    {
                        dataField: 'name',
                        text: 'Name',
                        sort: true,
                    },
                    {
                        dataField: `stats[0][${statsType}].fieldGoals`,
                        text: 'Field Goals',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'fieldGoals'),
                    },
                    {
                        dataField: `stats[0][${statsType}].extraPoints`,
                        text: 'Extra Points',
                        sort: true,
                        onSort: (__, order) => sortTable(order, 'extraPoints'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fiftyYardsPlus`,
                        text: 'FG 50+ Yards',
                        sort: true,
                        onSort: (__, order) =>
                            sortTable(order, 'fieldGoals50Plus'),
                    },
                    {
                        dataField: `stats[0][${statsType}].fantasyScore`,
                        text: 'Fantasy Points',
                        sort: true,
                        defaultSort: 'desc',
                        onSort: (__, order) =>
                            sortTable(order, 'fantasyPoints'),
                    },
                ];
            default:
                return [
                    {
                        dataField: 'name',
                        text: 'Name',
                        sort: true,
                    },
                    {
                        dataField: 'team',
                        text: 'Team',
                        sort: true,
                    },
                ];
        }
    }, [position, statsType, sortTable]);

    const defaultSorted = [
        {
            dataField: 'stats[0][' + statsType + '].fantasyScore',
            order: 'desc', // desc or asc
        },
    ];

    return (
        <div className='table-responsive'>
            <BootstrapTable
                keyField='name'
                striped
                hover
                condensed
                data={sortedPlayers}
                columns={getColumns()}
                defaultSorted={defaultSorted}
            />
        </div>
    );
}

export default ReactBootstrapTableNext;
