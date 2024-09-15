"use client"

import { ButtonType, CButton, CInput, Label } from "@/components"
import useHomeLogic from '@/features/home/Home.logic'
import { CFormContainer } from '../features/home/Home.style'

export default function Home() {
  const { cardInfo, errors, handleChange, submitForm } = useHomeLogic()

  return (
    <CFormContainer onSubmit={submitForm}>
			<div>
				<Label htmlFor="name">CARDHOLDER NAME</Label>
				<CInput id="name" name="name" type="text" placeholder="e.g. Jane Appleseed" value={cardInfo.name} onChange={handleChange} maxLength={34} message={errors.name} />
			</div>
			<div>
				<Label htmlFor="card">CARD NUMBER</Label>
				<CInput id="card" name="card" type="text" placeholder="e.g. 1234 5678 9123 0000" value={cardInfo.card} onChange={handleChange} maxLength={19} message={errors.card} />
			</div>
			<div style={{ display: 'flex'}}>
				<div style={{ flex: '1' }}>
					<Label htmlFor="exp">Exp. Date (MM/YY)</Label>
					<div style={{ display: 'flex', gap: '10px' }}>
						<CInput id="exp" style={{ width: '75px' }} name="month" type="text" value={cardInfo.month} placeholder="MM" onChange={handleChange} maxLength={2} message={errors.month} />
						<CInput id="year" style={{ width: '75px' }} name="year" type="text" value={cardInfo.year} placeholder="YY" onChange={handleChange} maxLength={2} message={errors.year} />
					</div>
				</div>
				<div>
					<Label htmlFor="cvc">CVC</Label>
					<CInput id="cvc" style={{ width: '150px' }} name="code" type="text" value={cardInfo.code} placeholder="e.g. 123" onChange={handleChange} maxLength={3} message={errors.code} />
				</div>
			</div>
			<CButton type={ButtonType.SUBMIT}>Confirm</CButton>
		</CFormContainer>
  )
}
