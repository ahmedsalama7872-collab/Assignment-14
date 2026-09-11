import React from 'react'

export default function Hero() {
  return (
    <div className='relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] min-h-screen'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]'></div>
        <div className='absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl'></div>
    </div>
  )
}
