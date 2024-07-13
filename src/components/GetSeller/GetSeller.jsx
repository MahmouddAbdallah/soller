import './GetSeller.css'
import { ArrowLeftIcon } from '../icons'
import macbook from '../../assets/macbook.png'

const GetSeller = () => {
    return (
        <section className='bg-purple-700-color py-5 position-relative d-flex overflow-hidden'>
            <div className='get-seller-circle d-none d-lg-block' />
            <div className='get-seller-circle-purple d-none d-lg-block' />
            <div className='get-seller-circle-purple-sm d-lg-none' />
            <div className='get-seller-circle-blue d-none d-lg-block' />
            <div className='container z-50'>
                <div className=' py-lg-5 d-flex flex-column align-items-center d-lg-block '>
                    <p className="amber-300-color-text fw-medium z-50">Get the Sun to power your home</p>
                    <div className="row z-50">
                        <div className='col-lg-7 text-center text-lg-start'>
                            <h2 className="fs-1 text-lg-xl fw-bolder text-white">All the power that you need for your house is now available</h2>
                        </div>
                        <div className='col-lg-5 d-flex justify-content-center justify-content-lg-end align-items-start mt-3 mt-lg-0 z-50'>
                            <button className='amber-bg border-none py-2 px-3 rounded-full amber-900-color-text fw-medium space-x-2 '>
                                <span className=' fw-bold'>
                                    Request a Quote
                                </span>
                                <ArrowLeftIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='px-3 px-lg-5 '>
                    <img className='w-100 ' src={macbook} alt="" />
                </div>
            </div>
        </section>
    )
}

export default GetSeller