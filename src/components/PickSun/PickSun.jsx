import './PickSun.css';
import picksun from '../../assets/pick-sun.png';

const PickSun = () => {
    return (
        <section className="">
            <div className="container text-center">
                <p className="amber-600-color-text fw-medium">No more waste</p>
                <h2 className="fs-1 text-lg-xl fw-bolder">Pick the Sun</h2>
                <div className="p-desc">
                    <p>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
                </div>
            </div>
            <div className='d-flex justify-content-between position-relative overflow-hidden py-5'>
                <div className='left-ball'>
                    <div className='w-100 h-100 d-flex'>
                        <div className='inside-left-ball' />
                    </div>
                </div>
                <div className=' container z-50 px-lg-5'>
                    <img
                        src={picksun}
                        className='w-100'
                        alt="" />
                </div>
                <div className='right-ball'>
                    <div className='w-100 h-100 d-flex'>
                        <div className='inside-right-ball' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PickSun