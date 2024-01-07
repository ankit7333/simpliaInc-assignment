import styles from './professionaly.module.scss'

export default function Professionaly() {
    const destionation = ['Mumbai', 'Thane', 'Nashik', 'Pune'];
    const selectDate = () => {   
        let currentDate = new Date();
        let arrayOfDate = [];
        for(let i = 0; i < 10; i++){
            let date = new Date(currentDate);
            date.setDate(currentDate.getDate() + i);
            let formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            arrayOfDate.push(formattedDate);
        }
        return arrayOfDate;
    }
    const dateselect = selectDate();

    const selectVehicalType = ['Hatchback', 'Sedan', 'SUV', 'Coupe', 'Convertible'];

    return(
        <section id="professionaly" className={`section ${styles.professionaly}`}>
            <div className={`container ${styles.professionaly__inner}`}>
                <h4>WE MOVE <br/> PROFESSIONALY</h4>
                <div className={`${styles.professionaly__book}`}>
                    <select className={`${styles.destination}`}>
                        { destionation.map((value, index) => <option key={index}>{value}</option>) }
                    </select>
                    <select className={`${styles.date}`}>
                        { dateselect.map((value, index) => <option key={index}>{value}</option>) }
                    </select>
                    <select className={`${styles.vehicaltype}`}>
                        { selectVehicalType.map((value, index) => <option key={index}>{value}</option>) }
                    </select>
                    <span className={`${styles.vehicaltypeimage}`}></span>
                </div>
            </div>
        </section>
    )
}