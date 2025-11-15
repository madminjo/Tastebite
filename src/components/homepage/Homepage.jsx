import React from 'react'
import './Homepage.scss'

const Homepage = () => {
	return (
		<div className=' flex items-center justify-center py-10'>
			<div>
				<img className='max-w-[800px] min-w-[100px] max-h-[600px] min-h-[50px]'  src='/homepage/home.png' alt='home' />
			</div>
			<div className='bg-blue-200 w-[550px] h-[600px] flex flex-col justify-center items-center gap-10 relative'>
				<div className='flex flex-col w-[400px] h-[500] gap-8 text-black'>
					<div className='flex'>
						<img src='/homepage/up.svg' alt='up' />{' '}
						<h2 className='text-sm'>85% would make this again</h2>
					</div>
					<h3 className='text-6xl'>Mighty Super Cheesecake</h3>
					<h4 className='text-lg'>
						Look no further for a creamy and ultra smooth classic cheesecake
						recipe! no one can deny its simple decadence.
					</h4>
					<img className='absolute top-[555px] left-125' src="/left.svg" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Homepage
