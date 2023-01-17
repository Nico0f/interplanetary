import styles from './card.module.css'

export default function Card(props: any) {

    console.log(props.props[0])

    if (!props.props[0]) return <p>Loading ...</p>

    return (
        <div className={styles.cardDiv}>
            <div className={styles.cardHeader}>
                <img src={props.props[0].image} className={styles.cardImg}/>
                <div className={styles.cardInfo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/186/186250.png" width="10px"/>
                    <span className={styles.cardTitle}>{props.props[0].Launch_Location}</span>
                    {/* <span><a className={styles.link}>View on Google Maps</a></span> */}
                    <p className={styles.location}>{props.props[0].mission_name}</p>
                    {/* <p><b>{props.item.startDate} - {props.item.endDate}</b></p> */}
                    <p>Year /s of service: <b>{props.props[0].Launch_year.length === 1 ? props.props[0].Launch_year : <p>{props.props[0].Launch_year[0]}-{props.props[0].Launch_year[1]}</p>}</b></p>
                    <p>Destination: {props.props[0].Celestial_body}</p>
                </div>
            </div>
            <div className={styles.description}>
                <p>{props.props[0].Description}</p>
            </div>
        </div>
    )
}
