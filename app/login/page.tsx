export default function Login() {
  return (
    <section className='w-11/12 max-w-5xl mx-auto pt-4 mb-4'>
      <header className='px-10'>
        <h2 className='text-[4.8rem] font-amiko mb-[3rem]'>Login</h2>
      </header>
      <form action='#' className='px-10'>
        <div className='grid grid-cols-2 gap-[2rem] w-full'>
          <label
            htmlFor='name'
            className='w-full border border-[#121212] mb-[2rem] p-3'
          >
            <input
              type='text'
              placeholder='Name'
              name='name'
              className='w-full outline-none'
            />
          </label>
          <label
            htmlFor='email'
            className='w-full border border-[#121212] mb-[2rem] p-3'
          >
            <input
              type='email'
              placeholder='Email'
              name='email'
              className='w-full outline-none'
            />
          </label>
        </div>
        <div className='flex w-full'>
          <label
            htmlFor='password'
            className='w-full border border-[#121212] mb-[2rem] p-3 flex-1'
          >
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='w-full outline-none'
            />
          </label>
        </div>

        <input
          type='submit'
          value='Sing In'
          className='bg-black text-white py-3 px-[3rem] min-h-[calc(4.5rem + 1px * 2)] hover:cursor-pointer hover:opacity-90'
        />
      </form>
    </section>
  )
}
