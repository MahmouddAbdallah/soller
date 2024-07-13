import logo from '../../assets/Logo-grey.svg'

const Footer = () => {
    return (
        <footer>
            <div className='container '>
                <div className="py-4 d-flex justify-content-between">
                    <div className='d-flex align-items-center gap-3'>
                        <img src={logo} alt="" />
                        <span className='d-none d-md-block'>@ 2023 Soller, Inc. All rights reserved.</span>
                    </div>
                    <ul className='d-flex gap-3 list-unstyled'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='border-top d-md-none'>
                    <p>@ 2023 Soller, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer