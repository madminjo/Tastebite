import React from 'react'
import Header from '../../components/header/Header'
import Homepage from '../../components/homepage/Homepage'
import MinCard from '../../components/minCard/MinCard'
import Categories from '../../components/categories/Categories'
import Join from '../../components/join/Join'
import Collections from '../../components/collections/Collections'
import Latest from '../../components/latest/Latest'

const Home = () => {
	return (
		<>
			<div className='w-[1440px] items-center mx-auto'>
				<Header />
				<Homepage />
				<MinCard />
				<Categories />
			</div>
			<Join />
			<div className='w-[1440px] items-center mx-auto'>
			<Collections />
			<Latest />
			</div>		
		</>
	)
}

export default Home
