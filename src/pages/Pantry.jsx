import {motion} from 'framer-motion';
import Records from '../records.json';
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';

function Pantry() {

  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState('instructions');


  useEffect(() => {
    if (ref.current.classList.contains('minus')) {
      console.log('Element contains minus class');
    }
    if (ref.current.classList.contains('plus')) {
      console.log('Element contains plus class');
    }
  }, []);

  const handleClick = (event) => {
  }

  return (
    <DetailWrapper
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >

      {Records && Records.map( records => {
          return(
            <Container className="box" key={records.id}>
              <ID>
                <h1>{records.id}</h1>              
              </ID> 
              <Title>
                <h4>{records.title}</h4>
              </Title>
              <Amount>
                <Button ref={ref} className={activeTab === 'minus' ? 'active' : ''} onClick={records.content -= 1}>-</Button>
                <p>Amount: {records.content}</p>
                <Button ref={ref} className={activeTab === 'plus' ? 'active' : ''} onClick={handleClick}>+</Button>
              </Amount>
            </Container>
          )
        })}
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
  margin: 5rem 0;
`;

const Container = styled.div`
  margin: 1rem 0;
  padding: 0 4rem;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ID = styled.div`

`;

const Title = styled.div`
`;

const Button = styled.button`
  color: white;
  background: white;
  font-weight: 600;
  border-radius: 50%;
  margin: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  padding: 1rem;
  transform: scale(0.8);
`;

const Amount = styled.div`
  width: 10%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  border: 3px solid black;
  margin: 1rem;
  text-align: center;
  align-items: center;
  p{
    font-weight: 600;
    font-size: 1.25rem;
  }
  .active {
    background: linear-gradient(35deg, #f27121, #e94057);
    color: white;
    font-weight: 600;
    border-radius: 50%;
    margin: 2rem;
    text-decoration: none;
    padding: 1rem;
    transform: scale(0.8);  
  }
`;

export default Pantry