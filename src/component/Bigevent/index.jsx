import { useState, useEffect } from 'react'
import styles from './bigevent.module.scss'
import banner1 from '../../public/image/bookexclusive.jpg'
import banner2 from '../../public/image/our.jpg'
import banner3 from '../../public/image/transport.jpg'

const BANNERS = [banner1, banner2, banner3];

export default function Bigevent() {

    return(
        <section id="bigevent" className={`section ${styles.bigevent}`}>
            <div className={`${styles.bigevent__inner}`}>
                <ImageSlider imageUrls={BANNERS} />
                <h4>We move special guests <br/> and famous people for <br/> the big events</h4>
            </div>
        </section>
    )
}
interface ImageSliderProps {
    imageUrls : string[]
}
function ImageSlider({imageUrls}:ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)
    const handlePrevious = () => {
        setImageIndex(index => {
            if(index === 0) return imageUrls.length - 1;
            return index - 1;
        })
    }
    const handleNext = () => {
        setImageIndex(index => {
            if(index === imageUrls.length - 1) return 0;
            return index + 1;
        })
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [imageIndex]);

    return <>
        <div className={`${styles.image__wrap}`}>
            <div className={`${styles.image__inner}`}>
                {imageUrls.map((url, index) => (<img key={index} src={url} style={{ translate: `${-100 * imageIndex}%` }} alt={`Banner Image ${index}`} />))}
            </div>
            <button aria-label="Previus Image" onClick={handlePrevious} className={`button ${styles.button} ${styles.button__left}`}>Prevoius</button>
            <button aria-label="Next Image" onClick={handleNext} className={`button ${styles.button} ${styles.button__right}`}>Next</button>
            <div className={`${styles.dot}`}>
                {imageUrls.map((_, index) => (
                    <button key={index} aria-label={`Image ${index}`} onClick={()=> setImageIndex(index)} className={index === imageIndex ? `${styles.active} button` : 'button'}></button>
                ))}
            </div>
        </div>
    </>
}