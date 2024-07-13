import './PowerfulFeature.css'
import serviceImg from '../../assets/powerful-features.png'
import { Power1Icon, Power2Icon, Power3Icon, Power4Icon } from '../icons'

const PowerfulFeature = () => {
    const items = [
        {
            id: 1,
            title: 'Ullamcorper arcu',
            description: 'Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.',
            icon: <Power1Icon />
        },
        {
            id: 2,
            title: 'Eget sit',
            description: 'Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis. ',
            icon: <Power2Icon />
        },
        {
            id: 3,
            title: 'Imperdiet pellentesque',
            description: 'Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.',
            icon: <Power3Icon />
        },
        {
            id: 4,
            title: 'Non libero',
            description: 'Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ',
            icon: <Power4Icon />
        },
    ]
    return (
        <section className='pt-5'>
            <div className='py-5 d-flex align-items-end align-items-lg-start position-relative overflow-hidden'>
                <div className='container'>
                    <div className="row gap-5 gap-lg-0 flex-lg-row">
                        <div className='col-lg-7 '>
                            <p className="amber-600-color-text fw-medium">System features</p>
                            <h2 className="fs-1 text-lg-xl fw-bolder">Powerful features</h2>
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
                        <div className='col-lg-5 z-50 px-5'>
                            <img className='w-100 img-power' src={serviceImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className='cylender-power' />
            </div>
        </section>
    )
}

export default PowerfulFeature