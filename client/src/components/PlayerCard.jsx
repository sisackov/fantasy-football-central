import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from 'react-router-dom';
import { PATH_PLAYER } from '../utils/constants';

function PlayerCard({ player }) {
    const history = useHistory();

    return (
        <Card
            className='col-12 col-md-8 col-lg-5 col-xl-4 m-4 border-0 shadow cursor-pointer'
            role='button'
            onClick={() => history.push(PATH_PLAYER + player.name)}
        >
            <Card.Img
                variant='top'
                src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espnId}.png&h=150&w=200&scale=crop`}
            />
            <Card.Body>
                <Card.Title className='text-center'>{player.name}</Card.Title>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <b>Position: </b> {player.position}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Average Fantasy Score: </b>{' '}
                        {player.stats[0].averages.fantasyScore}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Games Played: </b> {player.stats[0].games.length}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Experience: </b>{' '}
                        {`${player.experience} ${
                            isNaN(player.experience) ? '' : 'years'
                        }`}
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default PlayerCard;
