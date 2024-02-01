'use client'
import { styled } from "styled-components"

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 1.25rem 8rem;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;

  @media(min-width: ${props => props.theme.desktopBreakpoint}px) {
    font-size: 40px;
  }
`

export function Header(props: HeaderProps){
  const {setSearch, search} = useFilter(); 

  return(
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon 
          placeholder="Procurando por algo específico?"
          value={search}
          handleChange={setSearch} 
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}