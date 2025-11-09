import { useState } from 'react'
import React from 'react'
import Home from './page/Home/Home.jsx'

import AppContext from './context'
import { Routes, Route } from 'react-router-dom'

const App = () => {
	const [super1, setSuper1] = useState([
		{
			id: 1,
			name: 'Spinach and Cheese Pasta',
			img: '/homepage/super1.png',
			star: '/star.svg',
		},
		{
			id: 2,
			name: 'Fancy Glazed Donuts',
			img: '/homepage/super2.png',
			star: '/star.svg',
		},
		{
			id: 3,
			name: 'Mighty Cheesy Breakfast Burger',
			img: '/homepage/super3.png',
			star: '/star.svg',
		},
	])

	const [super2, setSuper2] = useState([
		{
			id: 1,
			name: 'Caramel Strawberry Milkshake',
			img: '/homepage/sweet1.png',
			star: '/star.svg',
		},
		{
			id: 2,
			name: 'Chocolate and Banana Jar Cake',
			img: '/homepage/sweet2.png',
			star: '/star.svg',
		},
		{
			id: 3,
			name: 'Berry Maddness Biscuts',
			img: '/homepage/sweet3.png',
			star: '/star.svg',
		},
	])

	const [categories, setCategories] = useState([
		{
			id: 1,
			name: 'Pasta',
			img: '/categories/cas1.svg',
		},
		{
			id: 2,
			name: 'Pizza',
			img: '/categories/cas2.svg',
		},
		{
			id: 3,
			name: 'Vegan',
			img: '/categories/cas3.svg',
		},
		{
			id: 4,
			name: 'Desserts',
			img: '/categories/cas4.svg',
		},
		{
			id: 5,
			name: 'Smoothies',
			img: '/categories/cas1.svg',
		},
		{
			id: 6,
			name: 'Breakfast',
			img: '/categories/cas2.svg',
		},
	])

	const [collected, setCollected] = useState([
		{
			id: 1,
			name: 'Sushi Combos for your Next Party',
			img: '/collections/col1.png',
			preci: '156 Recipes',
		},
		{
			id: 2,
			name: 'Everything Bagel',
			img: '/collections/col2.png',
			preci: '98 Recipes',
		},
		{
			id: 3,
			name: 'Cook Like a Chef',
			img: '/collections/col3.png',
			preci: '123 Recipes',
		},
		{
			id: 4,
			name: 'Exquisite Dinner Recipe Ideas',
			img: '/collections/col4.png',
			preci: '75 Recipes',
		},
		{
			id: 5,
			name: 'The Ultimate Cookie Frenzy',
			img: '/collections/col5.png',
			preci: '142 Recipes',
		},
		{
			id: 6,
			name: 'For the Love of Donuts',
			img: '/collections/col6.png',
			preci: '64 Recipes',
		},
	])

	const [latests, setLatests] = useState([
		{ id: 1, name: 'Caramel Strawberry Milkshake', img: '/latests/let1.png' },
		{ id: 2, name: 'Vanilla Oreo Shake', img: '/latests/let1.png' },
		{ id: 3, name: 'Blueberry Cheesecake Smoothie', img: '/latests/let1.png' },
		{ id: 4, name: 'Chocolate Banana Delight', img: '/latests/let1.png' },
		{ id: 5, name: 'Mango Passion Smoothie', img: '/latests/let1.png' },
		{ id: 6, name: 'Peanut Butter Shake', img: '/latests/let1.png' },
		{ id: 7, name: 'Matcha Green Tea Frappe', img: '/latests/let1.png' },
		{ id: 8, name: 'Salted Caramel Coffee', img: '/latests/let1.png' },
		{ id: 9, name: 'Raspberry Yogurt Smoothie', img: '/latests/let1.png' },
		{ id: 10, name: 'Coconut Pineapple Cooler', img: '/latests/let1.png' },
		{ id: 11, name: 'Hazelnut Mocha Shake', img: '/latests/let1.png' },
		{ id: 12, name: 'Avocado Honey Smoothie', img: '/latests/let1.png' },
		{ id: 13, name: 'Cookies & Cream Milkshake', img: '/latests/let1.png' },
		{ id: 14, name: 'Cherry Vanilla Smoothie', img: '/latests/let1.png' },
		{ id: 15, name: 'Iced Mocha Latte', img: '/latests/let1.png' },
		{ id: 16, name: 'Berry Blast Smoothie', img: '/latests/let1.png' },
		{ id: 17, name: 'Orange Creamsicle Shake', img: '/latests/let1.png' },
		{ id: 18, name: 'Watermelon Mint Cooler', img: '/latests/let1.png' },
		{ id: 19, name: 'Almond Choco Smoothie', img: '/latests/let1.png' },
		{ id: 20, name: 'Papaya Banana Shake', img: '/latests/let1.png' },
		{ id: 21, name: 'Pistachio Ice Milkshake', img: '/latests/let1.png' },
		{ id: 22, name: 'Tropical Paradise Smoothie', img: '/latests/let1.png' },
		{ id: 23, name: 'Cold Brew with Cream', img: '/latests/let1.png' },
		{ id: 24, name: 'Honey Lemon Iced Tea', img: '/latests/let1.png' },
	])

	return (
		<AppContext.Provider
			value={{
				super1,
				setSuper1,
				super2,
				setSuper2,
				categories,
				setCategories,
				collected,
				setCollected,
				latests,
				setLatests,
			}}
		>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</AppContext.Provider>
	)
}

export default App
