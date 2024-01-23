import { useState } from 'react'
import Agreement from '../shared/Agreement'
import { 약관목록 } from '@constants/apply'

export default function Terms() {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={true}
          onChange={(e, checked) => {
            console.log(e, checked)
          }}
        >
          약관에 모두 동의
        </Agreement.Title>
        {약관목록.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            link={link}
            checked={termsAgreements[id]}
            onChange={(_, checked) => {
              setTermsAgreements((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
    </div>
  )
}
