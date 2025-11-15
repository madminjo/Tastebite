import React from 'react'
import Header from '../../components/header/Header'
import FormLogaut from '../../components/formLogaut/FormLogaut'
import Footer from '../../components/footer/Footer'

const Auth = () => {
	return (
		<>
			<div className='w-[1440px] items-center mx-auto'>
				<Header />
				<FormLogaut />
			</div>
			<Footer />
		</>
	)
}

export default Auth
