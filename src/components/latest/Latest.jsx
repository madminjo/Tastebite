import React from 'react'
import './Latest.scss'
import AppContext from '../../context'

const Latest = () => {
	const { latests } = React.useContext(AppContext)

	return (
		<div>
			<div>
				<h2 className=' py-9 text-4xl font-bold px-8'>Latest Recipes</h2>
			</div>
			<div className='flex flex-wrap justify-center gap-8'>
				{latests.map(item => (
					<div key={item.id} className='latest-card'>
						<img width={300} height={200} src={item.img} alt={item.name} />
						<h3>{item.name}</h3>
					</div>
				))}
			</div>
		</div>
	)
}

export default Latest
