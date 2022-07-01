import React, { memo } from 'react'

const Details = ({ word, data }) => {

  // console.log(data);
  // var meaning = data.sense[0].definition

  return (
    <div className='details'>
      {
        word === "" ? (<span className='wordTitle'>Start by typing a word in Search</span>
        ) : (
          <div>
            <h1>{data.word}</h1>
            {/* <p className='audio'> {data.pronunciation}</p>  */}
            <audio controls>
              <source src={data.pronunciation}/>
            </audio>
            {/* `https://audio.oxforddictionaries.com/en/mp3/${data.id}__1_us_1.mp3` */}
            
            {/* <ul>
              {data.synonyms.map((item, index)=>{
              <li key={index}>
                {item}
              </li>
            })}
            </ul> */}

          </div>


          // data.map((item)=>{
          //   console.log(item)
          // })
          // "something"

        )}



    </div>
  )
}

export default memo(Details)