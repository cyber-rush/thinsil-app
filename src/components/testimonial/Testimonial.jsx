import { useContext } from 'react'
import myContext from '../../context/data/myContext'

const Testimonial = () => {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://lh3.googleusercontent.com/pw/ADCreHcZ2z5GNxqhFIdFJuc-fa1CVKdv5zkpyWEcrPn7ylGNRH3BVehFycqwP8wFSMhq4LqkQw3bKg6C7ENqX6xUFM5RFJLUSSofbErAH9K_ucGfX4hz3nBZvKn1CAycGTe9yAkt3p_-6pYeN5dSQtSLG_fNkC5RQ3zmwF91sh03Z02i2aT_VYe-JVimon3zF9Ykj9gw5E1gqYgrc7Op07yFY6GnwH9BQFlT4nUrH_RBDdAqZgmvtcMJQ9CRUv5rX4EsPrt4Q_u5Dl46CyVvjYuBxGL9ToDXSlXgOdw6TOHS3FuFK4yk3w3cJ7M8CZJk_7d3JyR1X1eRUv3uYNJZpSH_xouMqoxw6a96vnqy_cW5lnq7WEpkTZPqpy25GOj_loDGPXx3qtmnUvQPw-K26Nn643iJ5pcz1h9xsPauIW1gPcI9GmpMUiH0nTQZVnprVBYpCm-yCZCbFa2uYVBjiVGni12lIkE-oGOwKrhZ_fwH_qY9gfrP0ifMDz1Cn5ubh8cJzN8xT1fx8j2bnJhn2DJLUGFKyJU5x84CJ7S3LZ4PHkTRjlmluNX2_ecF_PY-e5WkOgNCIJsJIASBHwERM2yFmj5pL3F49kYWjBQBtX7z5xoGJkiIbIWO48yJ_OcUD_FbVZc5FuyCwArox48RTunj7-GJCxzAJP1F7V7YfDvH-wV2Ze4i92hijHShQTXN6USOHhUIyNtWthS1WDh73wVUFfoWXqK2pk9-vAm3GCWH-VfYq7c9wftX_4OMFFPd-tQSRINrDAE_60WbRlWkEPqBmAW8tx4tOZ5zuMNq0G-78bnYs30tooGgZ-3WfmSnPM_6j0g-0jNnxkgFeUYAaLSaufnQqsoa72pdrVNoFoLnLuVg0ct5hC8uSfr3NPbznkKn75uU4DrwaxNQfLArChuxJPM=w1231-h924-s-no-gm?authuser=0" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ujjawal Joshi</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Front-End Developer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial