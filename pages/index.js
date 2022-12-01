import Head from 'next/head'
import Image from 'next/image'
import Steps from '../component/checkout/Steps'
import PaymentOption from '../component/PaymentOption'
import Checkout from './checkout'


export default function Home() {
  return (
    <div className=''>
      <Checkout /> 
    </div>
  )
}