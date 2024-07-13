import './CaseStudies.css'
import caseImg from '../../assets/case-studies.png'
import { ArrowLeftIcon } from '../icons'
const CaseStudies = () => {
    return (
        <section className='py-5 case position-relative d-flex overflow-hidden'>
            <div className='circle-case d-none d-lg-block' />
            <div className='container py-5'>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <img className='w-100' src={caseImg} alt="" />
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className='px-lg-5'>
                            <div className='pb-3'>
                                <p className="amber-300-color-text fw-medium z-50">Case studies</p>
                                <h2 className="text-lg-2xl fw-bolder ">Check how our systems have helped others</h2>
                                <p className=''>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                            </div>
                            <a href='/' className=' text-decoration-none bg-transparent border-none py-2 rounded-full amber-900-color-text fw-medium space-x-2 '>
                                <span className=' fw-bold'>
                                    Find Case Studies
                                </span>
                                <ArrowLeftIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies