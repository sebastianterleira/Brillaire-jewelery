import { useEffect, useState } from 'react'
import { useCartStore } from '../../hooks/useCartStore'

export default function NavLinkBag() {
	const cartItems = useCartStore(state => state.cart)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const currentLocation = window.location.href
		const navLinkBag = document.getElementById('navlink-bag')

		if (navLinkBag.href === currentLocation) {
			navLinkBag.classList.add('active-nav')
		} else {
			navLinkBag.classList.remove('active-nav')
		}
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		})

		return () => clearTimeout(timer)
	}, [cartItems])

	return (
		<>
			<li>
				<a id='navlink-bag' className='nav-link' href='/cart'>
					Bag[{loading ? '...' : `${cartItems.length}`}]
				</a>
			</li>
		</>
	)
}
