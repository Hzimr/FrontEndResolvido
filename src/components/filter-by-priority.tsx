import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  padding: 12px 16px;
  z-index: 999;
  width: 250px;
  
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  list-style: none;

  top: 100%;

  li {
    color: var(--text-dark);
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority(){
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen(prev => !prev)

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && 
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>
      }
    </FilterContainer>
  )
}