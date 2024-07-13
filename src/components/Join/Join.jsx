import { ArrowLeftIcon } from '../icons'
import './Join.css'
const Join = () => {
    const items = [
        {
            id: 1,
            description: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
            user: {
                name: 'Mahmoud Mohamed',
                img: '../images/user-1.png',
                Kwh: 6
            }
        },
        {
            id: 2,
            description: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
            user: {
                name: 'Mahmoud Mohamed',
                img: '../images/user-2.png',
                Kwh: 6
            }
        },
        {
            id: 3,
            description: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
            user: {
                name: 'Mahmoud Mohamed',
                img: '../images/user-3.jpg',
                Kwh: 6
            }
        },
        {
            id: 4,
            description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
            user: {
                name: 'Mahmoud Mohamed',
                img: '../images/user-4.jpg',
                Kwh: 6
            }
        },
    ]
    return (
        <section className='bg-purple-900-color py-5 position-relative'>
            <div className='position-absolute bg-purple-800-color circle' />
            <div className='position-absolute bg-blue-400-color oval d-none d-lg-block' />
            <div className='container py-lg-5 d-flex flex-column align-items-center d-lg-block '>
                <p className="amber-300-color-text fw-medium z-50">System features</p>
                <div className="row z-50">
                    <div className='col-lg-7 text-center text-lg-start'>
                        <h2 className="fs-1 text-lg-xl fw-bolder text-white">Make something awesome</h2>
                        <p className='text-white'>Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
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
            <div className='container py-5'>
                <div className="row">
                    {items.map(item => {
                        return (
                            <div
                                className='col-lg-3 p-0 z-50'
                                key={item.id}>
                                <div className='bg-white m-2 px-4 py-4 rounded-2'>
                                    <div>
                                        <p className='fs-3'>*</p>
                                    </div>
                                    <div className='py-2'>
                                        <p>{item.description}</p>
                                    </div>
                                    <div>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <div>
                                                <img
                                                    className='rounded-full user-img'
                                                    src={item.user.img}
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h6>{item.user.name}</h6>
                                                <p className='text-sm'>{item.user.Kwh}KWH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Join