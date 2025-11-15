import React from 'react'
import './Footer.scss'

const Footer = () => {
	const footer1 = [
		{ id: 1, title: 'About us', href: '/about' },
		{ id: 2, title: 'Menu', href: '/menu' },
		{ id: 3, title: 'Blog', href: '/blog' },
		{ id: 4, title: 'Contact', href: '/contact' },
	]

	const footer2 = [
		{ id: 1, title: 'Privacy Policy', href: '/privacy' },
		{ id: 2, title: 'Terms of Service', href: '/terms' },
		{ id: 3, title: 'FAQ', href: '/faq' },
		{ id: 4, title: 'Support', href: '/support' },
	]

	const footer3 = [
		{ id: 1, title: 'Facebook', href: 'https://facebook.com' },
		{ id: 2, title: 'Instagram', href: 'https://instagram.com' },
		{ id: 3, title: 'Twitter', href: 'https://twitter.com' },
		{ id: 4, title: 'LinkedIn', href: 'https://linkedin.com' },
	]

const linksBus = [
  {
    id: 1,
    img: '/icons/facebook.svg',
    href: 'https://facebook.com',
    width: 20,
    height: 20,
  },
  {
    id: 2,
    img: '/icons/instagram.svg',
    href: 'https://instagram.com',
    width: 20,
    height: 20,
  },
  {
    id: 3,
    img: '/icons/twitter.svg',
    href: 'https://twitter.com',
    width: 90,
    height: 90,
  },
  {
    id: 4,
    img: '/icons/youtube.svg',
    href: 'https://youtube.com',
    width: 90,
    height: 90,
  },
]


	return (
		<div className='footer flex flex-col items-center justify-center py-9'>
			<div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
				<div className='flex flex-col gap-6'>
					<img width={120} height={40} src='/logo.svg' alt='' />
					<p className='text-base text-gray-300 max-w-[350px]'>
						"On the other hand, we denounce with righteous indignation and
						dislike men who are so beguiled and demoralized by the charms of
						pleasure of the moment
					</p>
				</div>
				<div className='flex items-center gap-12  '>
					<div className='flex  items-center flex-col gap-3'>
						<h2 className='my-2 text-xl font-bold'>Tastebite</h2>
						{footer1.map(item => (
							<a
								className='text-base text-gray-300'
								href={item.href}
								key={item.id}
							>
								{item.title}
							</a>
						))}
					</div>
					<div className='flex  items-center flex-col gap-3'>
						<h2 className='my-2 text-xl font-bold'>Legal</h2>
						{footer2.map(item => (
							<a
								className='text-base text-gray-300'
								href={item.href}
								key={item.id}
							>
								{item.title}
							</a>
						))}
					</div>
					<div className='flex  items-center flex-col gap-3'>
						<h2 className='my-2 text-xl font-bold'>Follow</h2>
						{footer3.map(item => (
							<a
								className='text-base text-gray-300'
								href={item.href}
								key={item.id}
							>
								{item.title}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className='border w-300 border-gray-300 mt-40 mb-12'></div>
			<div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
				<div>
					<h2 className='text-gray-500'>© 2020 Tastebite - All rights reserved</h2>
				</div>

        <div className="flex gap-4">
          {linksBus.map(item => (
            <a width={20} height={20} key={item.id} href={item.href} target="_blank" rel="noreferrer" className="inline-block">
              <img  src={item.img} alt={`social-${item.id}`} width={item.with} height={item.hith} />
            </a>
          ))}
				</div>	
			</div>
		</div>
	)
}

export default Footer
