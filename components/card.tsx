import styles from './card.module.css'

export default function Card(props: any) {

    return (
        <div className={styles.cardDiv}>
            {/* <img src={} className={styles.cardIsmg}/> */}
            <div className={styles.cardInfo}>
                <img src="https://cdn-icons-png.flaticon.com/512/186/186250.png" width="10px"/>
                <span className={styles.cardTitle}>Cape Canaveral</span>
                <span><a className={styles.link}>View on Google Maps</a></span>
                <p className={styles.location}>Venera 1</p>
                {/* <p><b>{props.item.startDate} - {props.item.endDate}</b></p> */}
                <p><b>{1961}</b></p>
                <p>Mariner 2 (Mariner-Venus 1962), an American space probe to Venus, was the first robotic space probe to conduct a successful planetary encounter. The first successful spacecraft in the NASA Mariner program, it was a simplified version of the Block I spacecraft of the Ranger program and an exact copy of Mariner 1.</p>
            </div>
        </div>
    )
}
