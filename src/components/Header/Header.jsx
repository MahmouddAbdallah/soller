import { ArrowLeftIcon } from '../icons';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import heroImg from '../../assets/hero.png'

const Header = () => {
    return (
        <header className='pb-5'>
            <div className=' overflow-hidden pb-5'>
                <Navbar />
                <div className='container'>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6'>
                            <div className='text-center text-lg-start'>
                                <h1 className='header-text-hero'>
                                    Get the Sun to Power Your Home
                                </h1>
                                <p className='fs-5'>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                                <button className='amber-bg border-none py-2 px-3 rounded-full amber-900-color-text fw-medium space-x-2 '>
                                    <span className='fs-5 fw-bold'>
                                        Request a Quote
                                    </span>
                                    <ArrowLeftIcon />
                                </button>
                            </div>
                            <div className="pt-5">
                                <div className='mt-lg-5'>
                                    <p className="fs-6 ">
                                        “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                                    </p>
                                    <div className='pt-3'>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <div>
                                                <img
                                                    className='rounded-full user-img'
                                                    src="../images/user-1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h6>Mahmoud Mohamed</h6>
                                                <p className='text-sm'>This website is help me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex position-relative contain-hero-img'>
                            <img className='w-100 position-absolute hero-img' src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header