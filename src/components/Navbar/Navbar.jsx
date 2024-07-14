import { useState } from 'react';
import { ArrowLeftIcon, HeadPhoneIcon, Logo, MenuIcon } from '../icons';
import './Navbar.css';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const eleRef = useRef()
    useEffect(() => {
        const handleClose = (e) => {
            if (eleRef.current && !eleRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handleClose)
        return () => document.removeEventListener('click', handleClose)
    })
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
                    <div ref={eleRef} className='d-lg-none z-50'>
                        <button onClick={() => { setOpen(!open) }} className='border-none amber-bg menu-btn rounded-full'>
                            <MenuIcon />
                        </button>
                        <div className={`d-lg-none position-fixed end-0 top-0 h-100 w-75 z-50 bg-amber-400-color d-flex flex-column justify-content-between ${open ? 'right-to-left' : 'left-to-right'}`}>
                            <ul className='list-unstyled w-100 pt-5'>
                                {items.map(item => {
                                    return <li
                                        className='w-100 py-3 text-center '
                                        key={item.name}>
                                        <a
                                            className='text-decoration-none text-white fw-medium'
                                            href={item.link}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                })}
                            </ul>
                            <div className='d-flex justify-content-center pb-3'>
                                <button className=' bg-transparent border-none py-2 px-3 rounded-full text-white fw-medium space-x-2 '>
                                    <span>
                                        Request a Quote
                                    </span>
                                    <svg width="14" height="14" className={'fill-white stroke-white'} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.586 5.64471L6.636 1.69471C6.45384 1.50611 6.35305 1.25351 6.35533 0.991311C6.3576 0.729114 6.46277 0.478301 6.64818 0.292893C6.83359 0.107485 7.0844 0.00231622 7.3466 3.78026e-05C7.6088 -0.00224062 7.8614 0.0985538 8.05 0.280712L13.707 5.93771C13.8002 6.03036 13.8741 6.14053 13.9246 6.26186C13.9751 6.38319 14.001 6.5133 14.001 6.64471C14.001 6.77612 13.9751 6.90623 13.9246 7.02757C13.8741 7.1489 13.8002 7.25906 13.707 7.35171L8.05 13.0087C7.95775 13.1042 7.84741 13.1804 7.7254 13.2328C7.6034 13.2852 7.47218 13.3128 7.3394 13.314C7.20662 13.3151 7.07494 13.2898 6.95205 13.2395C6.82915 13.1893 6.7175 13.115 6.62361 13.0211C6.52971 12.9272 6.45546 12.8156 6.40518 12.6927C6.3549 12.5698 6.3296 12.4381 6.33075 12.3053C6.3319 12.1725 6.35949 12.0413 6.4119 11.9193C6.46431 11.7973 6.54049 11.687 6.636 11.5947L10.586 7.64471H1C0.734784 7.64471 0.48043 7.53935 0.292893 7.35182C0.105357 7.16428 0 6.90993 0 6.64471C0 6.3795 0.105357 6.12514 0.292893 5.9376C0.48043 5.75007 0.734784 5.64471 1 5.64471H10.586V5.64471Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar