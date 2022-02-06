import Card from 'react-bootstrap/Card';
import ReactBootstrapTableNext from './ReactBootstrapTableNext';

function TableCard({ position }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className='text-align-center'>
                    Top {position}s
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                </Card.Subtitle>

                <ReactBootstrapTableNext
                    position={position}
                    statsType='averages'
                />
            </Card.Body>
        </Card>
    );
}

export default TableCard;
