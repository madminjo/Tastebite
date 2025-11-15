import React from 'react'
import { Link } from 'react-router'

const Header = () => {
	const headerURL = [
		{ id:1, name: 'Homepage', link: '/', imgage: '/click.svg' },
		{ id:2, name: 'Recipe Page', link: '/about', imgage: '/click.svg'  },
		{ id:3, name: 'Pages', link: '/services', imgage: '/click.svg'  },
		{ id:4, name: 'Buy', link: '/contact' },
	]


	return (
		<div className='flex items-center justify-between py-8 px-8'>
			<div className="headerLogo">
				<Link to="/"><img src="/logo.svg" alt="" /></Link>
			</div>
			<ul className='flex items-center gap-10'>
				{headerURL.map((item, index) => (
					<li className='flex gap-2 items-center' key={index}>{item.name} <img src={item.imgage} alt="" /></li>
				))}
			</ul>
			<div className='flex gap-8'>
				<img src="/search.svg" alt="search" />
				<Link to="/auth" >
				<img src="/user.svg" alt="user" />
				</Link>
			</div>
		</div>
	)
}

export default Header