import React from 'react'

const FormLogaut = () => {
	return (
		<div>
			<div className='py-3 px-6 mt-12 flex flex-col justify-center gap-6'>
				<div className='flex justify-between'>
					<h2 className='text-3xl font-bold'>Profile</h2>{' '}
					<button className='py-3 px-13 bg-orange-600 text-white font-normal'>
						SAVE
					</button>
				</div>
				<div className='w-350 h-1 bg-gray-300'></div>
				<div className='mt-6'>
					<div className='flex gap-12 items-center mt-12'>
						<img width={128} height={128} src='/userone.png' alt='' />
						<div className='flex gap-5'>
							<button className='py-3 bg-orange-500 text-white px-14'>
								Change photo
							</button>
							<button className='py-3 px-10 border'>Delete</button>
						</div>
					</div>

					<div className='flex flex-col mt-18 gap-8'>
						<div className='flex gap-5'>
							<div>
								<p className='text-gray-800'>FULL NAME</p>
								<div className='flex gap-4 w-[350px] h-[50px] border-b-2 border-gray-800'>
									<img width={18} height={20} src='/auth/user.svg' alt='' />{' '}
									<input
										type='text'
										placeholder='Suzan M'
										className='outline-none text-gray-800'
									/>
								</div>
							</div>
							<div>
								<p className='text-gray-500'>USERNAME</p>
								<div className='flex gap-4 w-[350px] h-[50px] border-b-2 border-gray-300'>
									<img width={18} height={20} src='/auth/name.svg' alt='' />{' '}
									<input
										type='text'
										placeholder='Miller'
										className='outline-none'
									/>
								</div>
							</div>
						</div>
						<div className='flex gap-5'>
							<div>
								<p className='text-gray-500'>EMAIL</p>
								<div className='flex gap-4 w-[350px] h-[50px] border-b-2 border-gray-300'>
									<img width={18} height={20} src='/auth/email.svg' alt='' />{' '}
									<input
										type='email'
										placeholder='suzan@gmail.com'
										className='outline-none'
									/>
								</div>
							</div>
							<div>
								<p className='text-gray-500'>PASSWORD</p>
								<div className='flex gap-4 w-[350px] h-[50px] border-b-2 border-gray-300'>
									<img width={18} height={20} src='/auth/pass.svg' alt='' />{' '}
									<input
										type='password'
										placeholder='•••••••'
										className='outline-none'
									/>
								</div>
							</div>
						</div>
						<div className='ml-165'>
							<h2 className='text-orange-500 text-sm'>Change</h2>
						</div>
					</div>

					<div className='mt-18'>
						<div>
							<h2 className='text-4xl font-bold py-4'>Connected Accounts</h2>
						</div>
						<div className='mt-4 flex-col py-6'>
							<div className='flex w-[740px] h-[74px] justify-between items-center border-b-2 py-13 mt-4 border-gray-400'>
								<div className='flex flex-col gap-4'>
									<img src='/facebook.svg' alt='' />
									<h2>Suzan Miller</h2>
								</div>
								<button>Disconnect</button>
							</div>
							<div className='flex w-[740px] h-[74px] justify-between items-center border-b-2 py-13 mt-4 border-gray-400'>
								<div className='flex flex-col gap-4 py-7'>
									<img src='/google.svg' alt='' />
									<h2>Suzan@gmail.com</h2>
								</div>
								<button>Disconnect</button>
							</div>
						</div>
					</div>

					<div className='mt-18 w-[740px]'>
						<div>
							<h2 className='text-4xl font-bold py-4'>Newsletter</h2>
							<div className='flex justify-between items-center py-7'>
								<h3 className='text-lg'>
									You are currently subscribed to our newsletter
								</h3>
								<button className='text-lg py-3 px-13 border rounded-2xl'>
									Unsubscribe
								</button>
							</div>
						</div>
						<div className='w-[740px] h-px border-b-2 border-gray-400'></div>
						<div className='flex justify-between py-4 items-center'>
							<div className='flex gap-2'>
								<img src='/signs.svg' alt='' />
								<p>Sign out</p>
							</div>

							<button className='text-orange-600'>Delete Account</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormLogaut
