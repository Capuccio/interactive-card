"use client"

import { ButtonType, CButton, CInput, Label } from "@/components"
import useHomeLogic from '@/features/home/Home.logic'
import { CFormContainer } from '../features/home/Home.style'

export default function Home() {
  const { cardInfo, errors, handleChange, submitForm } = useHomeLogic()

  return (
    <CFormContainer onSubmit={submitForm}>
			<div>
				<Label>CARDHOLDER NAME</Label>
				<CInput name="name" type="text" placeholder="e.g. Jane Appleseed" value={cardInfo.name} onChange={handleChange} maxLength={34} message={errors.name} />
			</div>
			<div>
				<Label htmlFor="card">CARD NUMBER</Label>
				<CInput name="card" type="text" placeholder="e.g. 1234 5678 9123 0000" value={cardInfo.card} onChange={handleChange} maxLength={19} message={errors.card} />
			</div>
			<div style={{ display: 'flex'}}>
				<div style={{ flex: '1' }}>
					<Label>Exp. Date (MM/YY)</Label>
					<div style={{ display: 'flex', gap: '10px' }}>
						<CInput style={{ width: '75px' }} name="month" type="text" value={cardInfo.month} placeholder="MM" onChange={handleChange} maxLength={2} message={errors.month} />
						<CInput style={{ width: '75px' }} name="year" type="text" value={cardInfo.year} placeholder="YY" onChange={handleChange} maxLength={2} message={errors.year} />
					</div>
				</div>
				<div>
					<Label>CVC</Label>
					<CInput style={{ width: '150px' }} name="code" type="text" value={cardInfo.code} placeholder="e.g. 123" onChange={handleChange} maxLength={3} message={errors.code} />
				</div>
			</div>
			<CButton type={ButtonType.SUBMIT}>Confirm</CButton>
		</CFormContainer>
  )
}
