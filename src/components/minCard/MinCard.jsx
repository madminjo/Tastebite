import React from 'react'
import './MinCard.scss'
import AppContext from '../../context'

const MinCard = () => {
	const { super1, super2 } = React.useContext(AppContext)

	return (
		<div>
			<div>
				<div className='py-8'>
					<h2 className=' py-9 text-4xl font-bold px-8'>Super Delicious</h2>
				</div>
				<div className='flex gap-8 justify-center items-center '>
					{super1.map(item => (
						<div key={item.id} className='min-card flex flex-col gap-4'>
							<img width={435} height={265} src={item.img} alt={item.name} />
							<div className='flex'>
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
							</div>
							<p className='text-xl font-bold'>{item.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className='py-8'>
				<div>
					<h2 className=' py-9 text-4xl font-bold px-8'>Sweet Tooth</h2>
				</div>
				<div className='flex gap-8 justify-center items-center '>
					{super2.map(item => (
						<div key={item.id} className='min-card flex flex-col gap-4'>
							<img width={435} height={265} src={item.img} alt={item.name} />
							<div className='flex'>
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
								<img src={item.star} alt='' />
							</div>
							<p className='text-xl font-bold'>{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MinCard
