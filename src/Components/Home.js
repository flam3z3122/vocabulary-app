import { Container, TextField , Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import Details from './Details';

const Home = () => {

    const [word, setWord]= useState("");
    const [data, setData]= useState([])
    const [item , setItem] = useState("")

    useEffect(()=>{
        axios.get(`https://vocab-app-en.herokuapp.com/api/${word}`)
       .then(
        res=> setData(res.data),
        res=> console.log(res.data)
       )
       console.log(data);


       if(data){
        //Definition:
        // console.log(data.senses[0].definition);
       }
    },[word]);

    // console.log(data.synonyms);
 

    return (
        <div>
                <Container maxWidth="md">
            <h1 className='heading'>{"Vocab"}</h1>
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" 
                    className='wordSearch' 
                    placeholder='search a word'
                    value={item}
                    onChange={(e)=>setItem(e.target.value)}  
                    required
                    />
                     <Button className='btn' onClick={()=>setWord(item)}><i className='fas fa-search'></i></Button>
                    <span className='material-icons'>close</span>
                    {/* <Button className='btn-click' onClick={()=>setWord(item)}>Click Me to search</Button> */}
                </div>

                {<Details word={word} data={data}/>}
                </div>
                
                </Container>
                {/* <ul>
                    <li className='word'>
                        <div className='details'>
                            <p>happy</p>
                            <span>adjective/ hapi</span>
                        </div>
                        <i className='fas fa-volume-up'></i>
                    </li>
                    <div className='content'>
                        <li className='meaning'>
                            <div className='details'>
                                <p>Meaning</p>
                                <span>feeling or showing pleasure</span>
                            </div>
                        </li>
                        <li className='example'>
                            <div className='details'>
                                <p>Example</p>
                                <span>Rahul is happy today</span>
                            </div>
                        </li>
                        <li className='synonyms'>
                            <div className='details'>
                                <p>Meaning</p>
                                <div className='list'>
                                    <span>glad,</span>
                                    <span>contented,</span>
                                    <span>delighted,</span>
                                    <span>cheerful,</span>

                                </div>
                            </div>
                        </li>
                    </div>
                </ul> */}

            {/* </div> */}

        </div>
    )
}

export default Home