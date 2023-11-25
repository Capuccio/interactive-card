import { ButtonType, CButton, CInput, CLabel } from "@/components"
import { CFormContainer } from "./CForm.styles"

export default function CForm() {
	return (
		<CFormContainer>
			<div>
				<CLabel>CARDHOLDER NAME</CLabel>
				<CInput name="user" type="text" placeholder="e.g. Jane Appleseed" />
			</div>
			<div>
				<CLabel htmlFor="number_card">CARD NUMBER</CLabel >
				<CInput name="number_card" type="text" placeholder="e.g. 1234 5678 9123 0000" />
			</div>
			<div style={{ display: 'flex'}}>
				<div style={{ flex: '1' }}>
					<CLabel>Exp. Date (MM/YY)</CLabel>
					<div style={{ display: 'flex', gap: '10px' }}>
						<CInput style={{ width: '75px' }} name="month" type="text" placeholder="MM" />
						<CInput style={{ width: '75px' }} name="year" type="text" placeholder="YY" />
					</div>
				</div>
				<div>
					<CLabel>CVC</CLabel>
					<CInput style={{ width: '150px' }} name="code" type="text" placeholder="e.g. 123" />
				</div>
			</div>
			<CButton callback={() => console.log('click')} type={ButtonType.SUBMIT}>Confirm</CButton>
		</CFormContainer>
	)
}
