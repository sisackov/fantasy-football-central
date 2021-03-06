import { useCallback } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useHistory } from 'react-router-dom';
import { PATH_PLAYER } from '../utils/constants';

function SearchPageTable({ playersData, statsType }) {
    const history = useHistory();

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

    const sortTable = useCallback(
        (order, stat) => {
            playersData.sort((a, b) => sortByStat(a, b, order, stat));
            // setSortedPlayers(sortedData);
        },
        [playersData, sortByStat]
    );

    const getColumns = useCallback(() => {
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
            {
                dataField: 'position',
                text: 'Position',
                sort: true,
            },
            {
                dataField: `stats[0][${statsType}].fantasyScore`,
                text: 'Fantasy Points',
                sort: true,
                defaultSort: 'desc',
                onSort: (__, order) => sortTable(order, 'fantasyPoints'),
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
                onSort: (__, order) => sortTable(order, 'interceptions'),
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
                dataField: `stats[0][${statsType}].receivingYards`,
                text: 'Receiving Yards',
                sort: true,
                onSort: (__, order) => sortTable(order, 'receivingYards'),
            },
            {
                dataField: `stats[0][${statsType}].receivingTouchdowns`,
                text: 'Receiving TDs',
                sort: true,
                onSort: (__, order) => sortTable(order, 'receivingTDs'),
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
                onSort: (__, order) => sortTable(order, 'fieldGoals50Plus'),
            },
        ];
    }, [statsType, sortTable]);

    const defaultSorted = [
        {
            // dataField: 'name',
            dataField: 'stats[0][' + statsType + '].fantasyScore',
            order: 'desc', // desc or asc
        },
    ];

    const customTotal = (from, to, size) => (
        <span className='react-bootstrap-table-pagination-total px-3'>
            Showing {from} to {to} of {size} Results
        </span>
    );

    const handleRowClick = useCallback(
        (__, row) => {
            // localStorage.setItem(LS_PLAYER_KEY, JSON.stringify(row));
            history.push(`${PATH_PLAYER}${row.name}`);
        },
        [history]
    );

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
    };

    return (
        <div className='table-responsive'>
            <BootstrapTable
                keyField='name'
                striped
                hover
                condensed
                data={playersData}
                rowEvents={{
                    onClick: handleRowClick,
                }}
                rowStyle={{ cursor: 'pointer' }}
                columns={getColumns()}
                defaultSorted={defaultSorted}
                pagination={paginationFactory(options)}
            />
        </div>
    );
}

export default SearchPageTable;
