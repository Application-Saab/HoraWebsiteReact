import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import dummyImage from '../assets/dummyPlaceholder.webp';
export const CardSkeleton = ({...props}) => {
    return (
            <Card style={{ width: '18rem' }} className='w-100' {...props}>
                <Card.Img variant="top" className='glow' src={dummyImage} height={300} />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={10} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={4} />
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </Card>
        )
       
}
