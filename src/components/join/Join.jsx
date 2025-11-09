import React from 'react'
import './Join.scss'

const Join = () => {
	return (
		<div className='w-[1905px] items-center  bg-red-300 h-[700px] mt-20 flex justify-center py-20'>
			<div className=' items-center text-center flex flex-col gap-10'>
				<h2 className='text-8xl font-bold max-w-[700px]'>Deliciousness to your inbox</h2>
				<h3 className='text-2xl max-w-[600px] items-center'>Enjoy weekly hand picked recipes and recommendations</h3>
				<div>
					<input className='py-6 cursor-pointer  bg-white pl-2 pr-20 rounded-l-2xl outline-none' type="email" name="email" placeholder='Email Address' />
					<button className='py-6 cursor-pointer px-10  bg-orange-600 rounded-r-2xl'>Join</button>
				</div>
				<p className='text-lg'>By joining our newsletter you agree to our <span className='border-b-2 border-orange-600 pb-0.5 cursor-pointer hover:border-orange-600 transition'>Terms and Conditions</span> </p>
			</div>
		</div>
	)
}

export default Join