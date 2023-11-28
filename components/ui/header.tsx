import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Name from '@/public/images/logo.jpg'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block pt-10" aria-label="FDH">

              <Image className="" src={Name} width={100} alt="FDH Logo" />

            </Link>
            
          </div>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
