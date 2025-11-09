import React from 'react'
import AppContext from '../../context'

const Collections = () => {
	const {collected} = React.useContext(AppContext)

	return (
		<div>
			<div>
				<h2 className=' py-9 text-4xl font-bold px-8'>
					Hand-Picked Collections
				</h2>
			</div>
			<div className='flex flex-wrap items-center gap-6 justify-center'>
				{
					collected.map((item) => (
						<div key={item.id} className='border border-gray-300 rounded-2xl'>
							<img width={640} height={330} src={item.img} alt={item.name} />
							<div className='flex justify-between py-8 px-6 items-end'>
								<h3 className='text-4xl max-w-[400px]'>{item.name}</h3>
								<button className='w-32 h-[29px] border'>{item.preci}</button>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Collections