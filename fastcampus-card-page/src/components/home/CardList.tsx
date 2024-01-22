import { useQuery, useInfiniteQuery } from 'react-query'
import { getCards } from '@remote/card'
import { flatten } from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

import ListRow from '@shared/ListRow'
import { useCallback } from 'react'
import Badge from '../shared/Badge'

function CardList() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    // getNextPageParam의 반환값이 들어온다.
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      // 데이터가 snapshot으로 넘어온다.
      getNextPageParam: (snapshot) => {
        // snapshot의 제일 마지막 요소를 반환
        return snapshot.lastVisible
      },
    },
  )

  const navigate = useNavigate()

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }

    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (data == null) {
    return null
  }

  const cards = flatten(data?.pages.map(({ items }) => items))

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, index) => {
            return (
              <ListRow
                key={card.id}
                contents={
                  <ListRow.Texts
                    title={`${index + 1}위`}
                    subTitle={card.name}
                  />
                }
                right={
                  <div>
                    {card.payback != null ? (
                      <Badge label={card.payback} />
                    ) : null}
                  </div>
                }
                withArrow={true}
                onClick={() => {
                  navigate(`/card/${card.id}`)
                }}
              />
            )
          })}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
