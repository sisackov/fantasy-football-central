import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTable, useSortBy, useFilters, useColumnOrder } from 'react-table';
import { motion, AnimatePresence } from 'framer-motion';
import { matchSorter } from 'match-sorter';
import { fetchQueriedPlayers } from '../api/ffc-api';
import { TABLE_QUERIES } from '../utils/constants';

const makeData = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 16,
        visits: '5',
        progress: '40',
        status: 'complicated',
    },
];

const Styles = styled.div`
    padding: 1rem;

    table {
        border-spacing: 0;
        border: 1px solid black;

        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            background: white;
            ${'' /* max-height: 50px; */}

            :last-child {
                border-right: 0;
            }
        }
    }
`;

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={(e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value=''>All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <>
            <input
                type='range'
                min={min}
                max={max}
                value={filterValue || min}
                onChange={(e) => {
                    setFilter(parseInt(e.target.value, 10));
                }}
            />
            <button onClick={() => setFilter(undefined)}>Off</button>
        </>
    );
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <input
                value={filterValue[0] || ''}
                type='number'
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [
                        val ? parseInt(val, 10) : undefined,
                        old[1],
                    ]);
                }}
                placeholder={`Min (${min})`}
                style={{
                    width: '70px',
                    marginRight: '0.5rem',
                }}
            />
            to
            <input
                value={filterValue[1] || ''}
                type='number'
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [
                        old[0],
                        val ? parseInt(val, 10) : undefined,
                    ]);
                }}
                placeholder={`Max (${max})`}
                style={{
                    width: '70px',
                    marginLeft: '0.5rem',
                }}
            />
        </div>
    );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data }) {
    // const defaultColumn = React.useMemo(
    //     () => ({
    //         // Let's set up our default Filter UI
    //         Filter: DefaultColumnFilter,
    //     }),
    //     []
    // );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        visibleColumns,
        prepareRow,
        setColumnOrder,
        state,
    } = useTable(
        {
            columns,
            data,
            // defaultColumn,
        },
        useColumnOrder,
        useFilters,
        useSortBy
    );

    const spring = React.useMemo(
        () => ({
            type: 'spring',
            damping: 50,
            stiffness: 100,
        }),
        []
    );

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, i) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <motion.th
                                    {...column.getHeaderProps({
                                        layouttransition: spring,
                                        style: {
                                            minWidth: column.minWidth,
                                        },
                                    })}
                                >
                                    <div {...column.getSortByToggleProps()}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </div>
                                    {/* <div>
                                        {column.canFilter
                                            ? column.render('Filter')
                                            : null}
                                    </div> */}
                                </motion.th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    <AnimatePresence>
                        {rows.slice(0, 10).map((row, i) => {
                            prepareRow(row);
                            return (
                                <motion.tr
                                    {...row.getRowProps({
                                        type: spring,
                                        exit: { opacity: 0, maxHeight: 0 },
                                    })}
                                >
                                    {row.cells.map((cell, i) => {
                                        return (
                                            <motion.td
                                                {...cell.getCellProps({
                                                    type: spring,
                                                })}
                                            >
                                                {cell.render('Cell')}
                                            </motion.td>
                                        );
                                    })}
                                </motion.tr>
                            );
                        })}
                    </AnimatePresence>
                </tbody>
            </table>
            <pre>
                <code>{JSON.stringify(state, null, 2)}</code>
            </pre>
        </>
    );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
    return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue >= filterValue;
    });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

function TableCard2({ position }) {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // setIsLoading(true);
            console.log('fetching data', position);
            try {
                const res = await fetchQueriedPlayers('position=QB');
                setData(res);
            } catch (e) {
                // setErrorMsg(e.message);
                console.error(e.message);
            }
            // setIsLoading(false);
        };

        fetchData();
    }, [position]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                        minWidth: 150,
                    },
                    {
                        Header: 'Team',
                        accessor: 'team',
                        minWidth: 150,
                        // Use our custom `fuzzyText` filter on this column
                        // filter: 'fuzzyText',
                    },
                ],
            },
            {
                Header: 'Average',
                columns: [
                    {
                        Header: 'Pass Yards',
                        // accessor: 'stats[0].averages.passingYards',
                        accessor: (row) => {
                            console.log(
                                row.stats[0].averages.passingYards ||
                                    row.stats[0].averages.passingYardsAvg ||
                                    0
                            );
                            return 0;
                            // row.stats[0].averages.passingYards || 0,
                        },
                        minWidth: 100,
                    },
                    {
                        Header: 'Pass TDs',
                        accessor: 'stats[0].averages.passingTouchdowns',
                        minWidth: 100,
                        // Use our custom `fuzzyText` filter on this column
                        // filter: 'fuzzyText',
                    },
                    {
                        Header: 'Interceptions',
                        accessor: 'stats[0].averages.interceptions',
                        minWidth: 100,
                    },
                    {
                        Header: 'Fantasy Points',
                        accessor: 'stats[0].averages.fantasyScore',
                        minWidth: 100,
                    },
                ],
            },
        ],
        []
    );

    // const data = React.useMemo(() => makeData, []);
    // const data = React.useMemo(() => fetchQueriedPlayers(), []);

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    );
}

export default TableCard2;
