import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Player = ({nom, equipe, num, age, nation, url}) => {

    return (
        <>
        
        
            <div>
                
                    <Card style={{ width: '18rem', height: 'auto' }}>
                        <Card.Img variant="top" src={url} />
                        <Card.Body>
                            <Card.Title> {nom} </Card.Title>
                            <Card.Text>
                                <ul className='displayItems'>
                                    <li>Equipe : {equipe} </li>
                                    <li>Numero : {num} </li>
                                    <li>Age : {age} </li>
                                    <li> Nationalite : {nation} </li>


                                </ul>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </div>
           
            
        </>
    )

}

export default Player;