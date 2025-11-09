import React from 'react'
import './Categories.scss'
import AppContext from '../../context'

const Categories = () => {
	const { categories } = React.useContext(AppContext)

	return (
		<div className='py-8'>
			<div >
				<h2 className=' py-9 text-4xl font-bold px-8'>Popular Categories</h2>
			</div>
			<div className='flex items-center justify-center gap-12'>
				{
					categories.map((item) => (
						<div key={item.id} className='category-card flex flex-col items-center gap-2'>
							<img width={180} height={180} src={item.img} alt={item.name} />
							<p className='text-lg font-bold'>{item.name}</p>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Categories