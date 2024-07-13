import './Services.css'
import serviceImg from '../../assets/services.png'
import { CarIcon, DefensePersonIcon, GlassIcon, PiggyIcon } from '../icons'

const Services = () => {
    const items = [
        {
            id: 1,
            title: 'Et mauris',
            description: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.',
            icon: <CarIcon />
        },
        {
            id: 2,
            title: 'Eget sit',
            description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ',
            icon: <GlassIcon />
        },
        {
            id: 3,
            title: 'Imperdiet pellentesque',
            description: 'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.',
            icon: <DefensePersonIcon />
        },
        {
            id: 4,
            title: 'Non libero',
            description: 'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.',
            icon: <PiggyIcon />
        },
    ]
    return (
        <section className='pt-5'>
            <div className='py-5 d-flex align-items-end align-items-lg-start position-relative overflow-hidden'>
                <div className='container'>
                    <div className="row flex-column-reverse gap-5 gap-lg-0 flex-lg-row">
                        <div className='col-lg-5 z-50 px-5'>
                            <img className='w-100 img-serv' src={serviceImg} alt="" />
                        </div>
                        <div className='col-lg-7 '>
                            <p className="amber-600-color-text fw-medium">Services</p>
                            <h2 className="fs-1 text-lg-xl fw-bolder">Personalized servicess</h2>
                            <p>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                            <div className='row'>
                                {items.map(item => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-md-6 col-12 px-3">
                                            <div className='py-3'>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h6>{item.title}</h6>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cylender' />
            </div>
        </section>
    )
}

export default Services