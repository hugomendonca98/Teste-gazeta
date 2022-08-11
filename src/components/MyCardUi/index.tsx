import Image from 'next/image';
import React from 'react'
import { Card } from './styles';

interface CardProps {
  fantasyName: string;
  cover: string;
  discountAmount: number;
}

export const MyCardUi = ({fantasyName, cover, discountAmount}: CardProps) => {
  return (
    <Card>
        <h2>{fantasyName}</h2>
        
        <Image width={254} height={175} src={`${process.env.NEXT_PUBLIC_STATIC_URL}/${cover}`} alt={`${fantasyName} - imagem`}/>
        <p>Desconto: {discountAmount}%</p>
    </Card>
  )
}
