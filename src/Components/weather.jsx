import React from 'react'

export const weather = (props) => {
  console.log('Weather Data:', props.data);
  return (
    <div className='cont'>
        {Object.keys(props.data).length > 0 &&
    <div className="col-md-12 text-center mt-5">
      <h4 style={{'fontSize':'3rem','fontSize': "3rem",'fontWeight': '700','color': 'white','textShadow': '9px 1px 7px rgb(255 13 13 / 50%)'}}>{props.data?.city?.name.toUpperCase()}</h4>
          <div className="main">
        {props.data.list.slice(0,5).map((d,index)=>{
          const date = new Date(d?.dt * 1000);
  const formattedDate = `${date.getDate()+index}/${date.getMonth() + 1}/${date.getFullYear()}`
  console.log(`Index: ${index}, Timestamp: ${d.dt}, Formatted Date: ${formattedDate}`);
          return <>
      <div className="rounded wetherResultBox" key={index}>
        <img className="weathorIcon"
          src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
          <h6 className="dt">Date: {formattedDate}</h6>
        {/* <h6 className="dt">Date: {`${(new Date(d?.dt*1000)).getDate()}/${(new Date(d?.dt*1000)).getMonth()+1}/${(new Date(d?.dt*1000)).getFullYear()}`}</h6> */}

        {/* <h5 className="weathorCity">
        </h5> */}
          <h6 className="weathorTemp">Temp: {((d?.main?.temp) - 273.15).toFixed(2)}°C</h6>
        {/* <h6 className="weathorTemp">{((props.props.data?.main?.temp) - 273.15).toFixed(2)}°C</h6> */}
        {/* Humidity:<h6 className="weathorTemp">{(props.props.data?.main?.humidity)}</h6> */}
        <h6 className="temp_min">Min:{((d?.main?.temp_min) - 273.15).toFixed(2)}°C</h6> 
        <h6 className="temp_max">Max: {((d?.main?.temp_max) - 273.15).toFixed(2)}°C</h6> 
        <h6 className="humi">Humidity:{(d?.main?.humidity)}%</h6>
      </div>
      </>
        })}
        </div>
    </div>
  }
    </div>
  )
}

export default weather;