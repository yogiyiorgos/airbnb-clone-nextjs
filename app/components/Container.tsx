'use client'

interface ContainerProps {
  children: React.ReactNode // defines the type of children props
}

// a functional component that takes a `ContainerProps` as its parameter
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container
