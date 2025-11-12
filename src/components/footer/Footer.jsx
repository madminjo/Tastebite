import React from 'react'
import './Footer.scss'

const Footer = () => {
	return (
		<div className='footer flex flex-col items-center justify-center py-9'>
			<div className='flex items-center'>
				<div className='flex flex-col gap-6'>
					<img width={120} height={40} src='/logo.svg' alt='' />
					<p className='text-base text-gray-300 max-w-[350px]'>
						"On the other hand, we denounce with righteous indignation and
						dislike men who are so beguiled and demoralized by the charms of
						pleasure of the moment
					</p>
				</div>
				<div className='flex items-center gap-12'>
					<div className='flex  items-center flex-col gap'>
						<h2 className='my-2 text-xl font-bold'>Tastebite</h2>
						<p>about us</p>
						<p>about us</p>
						<p>about us</p>
					</div>
					<div className='flex  items-center flex-col gap'>
						<h2 className='my-2 text-xl font-bold'>Tastebite</h2>
						<p>about us</p>
						<p>about us</p>
						<p>about us</p>
					</div>
					<div className='flex  items-center flex-col gap'>
						<h2 className='my-2 text-xl font-bold'>Tastebite</h2>
						<p>about us</p>
						<p>about us</p>
						<p>about us</p>
					</div>
				</div>
			</div>
			<div className='border w-300 border-gray-300 mt-40 mb-12'></div>
			<div></div>
		</div>
	)
}

export default Footer
