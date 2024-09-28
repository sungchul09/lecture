import FixedBottomButton from '@/components/shared/FixedBottomButton'
import Flex from '@/components/shared/Flex'
import ListRow from '@/components/shared/ListRow'
import Text from '@/components/shared/Text'
import { motion } from 'framer-motion'

import Top from '@/components/shared/Top'
import { getCard } from '@/remote/card'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { useCallback } from 'react'
import useUser from '@/hooks/auth/userUser'
import { useAlertContext } from '@/contexts/AlertContext'

function CardPage() {
  const { id = '' } = useParams()
  const user = useUser()
  const { open } = useAlertContext()

  const navigate = useNavigate()

  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  })

  const moveToApply = useCallback(() => {
    if (user == null) {
      open({
        title: '로그인이 필요한 기능입니다.',
        onButtonClick: () => {
          navigate(`/signin`)
        },
      })
      return
    }
    navigate(`/apply/${id}`)
  }, [user, id, open, navigate])

  if (data == null) {
    return null
  }

  const { name, corpName, promotion, tags, benefit } = data

  const subTitle =
    promotion != null ? removeHtmlTags(promotion.title) : tags?.join(', ')

  return (
    <div>
      <Top title={`${corpName}`} subTitle={subTitle} />
      <ul>
        {benefit.map((text, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, translateX: -90 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
              // animate={{ opacity: 1, translateX: 0 }}
            >
              <ListRow
                key={text}
                left={<IconCheck />}
                contents={
                  <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
                }
                onClick={() => {}}
                as="div"
              />
            </motion.li>
          )
        })}
      </ul>
      {promotion != null ? (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true} typography="t5">
            유의 사항
          </Text>
          <Text typography="t7">{removeHtmlTags(promotion.terms)}</Text>
        </Flex>
      ) : null}
      <FixedBottomButton
        label="신청하기"
        disabled={false}
        onClick={moveToApply}
      />
    </div>
  )
}

function IconCheck() {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 48 48"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="white" fill-opacity="0.01" height="48" width="48" />
      <path
        d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
        fill="#2F88FF"
        stroke="black"
        stroke-linejoin="round"
        stroke-width="4"
      />
      <path
        d="M16 24L22 30L34 18"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      />
    </svg>
  )
}

function removeHtmlTags(text: string) {
  let output = ''
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === '>') {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }
  return output
}

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0 24px 80px 24px;
`

export default CardPage
