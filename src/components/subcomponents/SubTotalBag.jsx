import { useCartStore } from '../../hooks/useCartStore'

export default function SubTotalBag() {
	const cartItems = useCartStore(state => state.cart)

	const subtotal = cartItems.reduce((acc, item) => {
		const cleanPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
		return acc + cleanPrice
	}, 0)

	return (
		<>
			<p style={{ fontSize: '12px' }}>${subtotal.toFixed(2)} CAD</p>
		</>
	)
}
