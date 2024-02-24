import classes from '../modules/Result.module.scss';

const Result = ({addressData}) => {
  return (
    <div className={classes['result-wrapper']}>
        <div className={classes['result-container']}>
          <div className={classes['result']}>
           <div>
           <h4>IP ADDRESS</h4>
            <p>{addressData.ip}</p>
           </div>
          </div>
          <div className={classes['result']}>
            <div>
            <h4>LOCATION</h4>
            <p>{addressData.location && addressData.location.region}</p>
            </div>
          </div>
          <div className={classes['result']}>
            <div>
            <h4>TIMEZONE</h4>
            <p>{addressData.location && addressData.location.timezone}</p>
            </div>
          </div>
          <div className={classes['result']}>
            <div  style={{borderRight: 'none'}}>
            <h4>ISP</h4>
            <p>{addressData.isp}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Result