import React from 'react'
import Header from '../../components/header/Header'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'

const Category = () => {
	return (
		<>
			<div className='w-[1440px] items-center mx-auto'>
				<Header />
				<Categories />
			</div>
			<Footer />
		</>
	)
}

export default Category
