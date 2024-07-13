import { ArrowLeftIcon, HeadPhoneIcon, Logo, MenuIcon } from '../icons';
import './Navbar.css';

const Navbar = () => {
    const items = [
        { name: 'Products', link: '/' },
        { name: 'Solutions', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'Configure', link: '/' },

    ]
    return (
        <nav>
            <div className='container py-4 '>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-5 '>
                        <Logo />
                        <ul className='list-unstyled d-none d-lg-flex gap-3 align-items-center'>
                            {items.map(item => {
                                return <li key={item.name}>
                                    <a
                                        className='text-decoration-none text-black fw-medium'
                                        href={item.link}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className='d-none d-lg-flex align-items-center gap-3 z-50'>
                        <div className='blue-text d-flex align-align-items-center gap-3'>
                            <HeadPhoneIcon />
                            <span className=''>555 818 282</span>
                        </div>
                        <button className='amber-bg border-none py-2 px-3 rounded-full amber-900-color-text fw-medium space-x-2 '>
                            <span>
                                Request a Quote
                            </span>
                            <ArrowLeftIcon />
                        </button>
                    </div>
                    <div className='d-lg-none z-50'>
                        <button className='border-none amber-bg menu-btn rounded-full'>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar