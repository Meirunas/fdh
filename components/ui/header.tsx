import Link from 'next/link'
import Image from 'next/image'
import Name from '@/public/images/logo.jpg'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="shrink-10">
            {/* Logo */}
            <Link href="/" className="block pt-4 pr-4 pb-4" aria-label="FDH">

              <Image src={Name} width={100} alt="FDH Logo" />

            </Link>
        
          </div>
        </div>
      </div>
    </header>
  )
}
