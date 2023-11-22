"use client"
import { ButtonType, CButton } from "@/components"

export default function CForm() {
	return (
		<form>
			<label>CARDHOLDER NAME</label>
			<input type="text" placeholder="e.g. Jane Appleseed" />

			<label htmlFor="number_card">CARD NUMBER</label>
			<input name="numer_card" type="text" placeholder="e.g. 1234 5678 9123 0000" />

			<div style={{ display: 'flex' }}>
				<div>
					<label>Exp. Date (MM/YY)</label>
					<input type="text" placeholder="MM" />
					<input type="text" placeholder="YY" />
				</div>
				<div>
					<label>CVC</label>
					<input type="text" placeholder="e.g. 123" />
				</div>
			</div>
			<CButton callback={() => console.log('click')} type={ButtonType.SUBMIT}>Confirm</CButton>
		</form>
	)
}
