import React from 'react'
import styled from 'styled-components'
import { useSearchContext } from '../../pages/discover'
import { useState } from 'react'

import PlusIcon from '../../images/plus.svg'
import MinusIcon from '../../images/minus.svg'
import Checkbox from '../checkbox'

export default function AccordionFilter({ items, title }) {
  const [expanded, setExpanded] = useState(false)
  const [checkedItemsIds, setCheckedItemsIds] = useState([])

  return (
    <div>
      <CategoryTitle
        className={`title ${expanded && 'expanded'}`}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded && <Icon src={MinusIcon} />}
        {!expanded && <Icon src={PlusIcon} />}
        {title}
      </CategoryTitle>
      <Items className={expanded ? 'expanded' : ''}>
        {items.map((item) => (
          <Checkbox
            key={item.id}
            checked={checkedItemsIds.includes(item.id)}
            name={item.name}
            label={item.name}
            onClick={() =>
              toggelCheckbox(item.id, checkedItemsIds, setCheckedItemsIds)
            }
          />
        ))}
      </Items>
    </div>
  )
}

function toggelCheckbox(itemId, checkedIds, setCheckedItemsIds) {
  const checked = checkedIds.includes(itemId)
  if (checked) {
    setCheckedItemsIds((prev) => prev.filter((i) => i !== itemId))
  } else {
    setCheckedItemsIds((prev) => [...prev, itemId])
  }
}

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
  cursor: pointer;
`

const Items = styled.div`
  font-weight: 100;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  &.expanded {
    max-height: 1000px;
    transition: max-height 0.25s ease-in;
  }
`

// const Item = styled.div`
//   font-weight: 100;
//   color: ${colors.fontColor};
//   cursor:pointer;
// `
const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
