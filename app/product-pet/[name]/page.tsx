import Image from 'next/image'
import exampleImage from '../../../public/example-photo.jpg'
import { Add, Minus } from '../../../components/icons'
import Link from 'next/link'

export default function ProductById() {
  return (
    <section className='w-11/12 max-w-5xl mx-auto pt-16 grid grid-cols-2 gap-x-6 relative'>
      <figure className='overflow-hidden py-4'>
        <Image
          src={exampleImage}
          alt='Example Product By ID'
          className='object-cover aspect-square'
        />
      </figure>
      <aside className='py-4 w-full px-20 sticky top-0'>
        <h5 className='uppercase text-gray-400 font-amiko'>Pet land</h5>
        <h2 className='uppercase font-amiko text-4xl pt-4'>Title product</h2>

        <p className='font-amiko uppercase text-2xl py-6'>$10,00 COP</p>
        <div className='border border-black p-2 cursor-pointer flex items-center justify-between max-w-[10rem]'>
          <Link href='#' className='text-xl'>
            <Add />
          </Link>
          <small className='font-amiko text-xl uppercase'>0</small>
          <Link href='#' className='text-xl'>
            <Minus />
          </Link>
        </div>
        <div className='py-6'>
          <input
            type='button'
            value='Sold Out'
            className='py-3 border border-gray-400 block w-full text-gray-400 font-amiko cursor-pointer'
          />
          <input
            type='button'
            value='Buy it now'
            className='py-3 bg-gray-400 block w-full mt-4 text-white font-amiko cursor-pointer'
          />
        </div>
      </aside>
    </section>
  )
}
