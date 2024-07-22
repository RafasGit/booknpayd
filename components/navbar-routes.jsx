'use client'

//import { UserButton, useAuth } from '@clerk/nextjs'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
//import { LogOut } from 'lucide-react'
import i
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const NavbarRoutes = () => {
  const { data } = useSession();
  
    const pathname = usePathname()
  
    // const isTeacherPage = pathname?.startsWith('/teacher')
    // const isCoursePage = pathname?.includes('/courses')
    // const isSearchPage = pathname === '/';
    return (
        <>
         {/* <h2 className="hover:scale-105 hover:text-primary">Home</h2>
        <h2 className="hover:scale-105 hover:text-primary">Services</h2>
        <h2 className="hover:scale-105 hover:text-primary">About Us</h2> */}
         
            <div className="hidden md:block">       
         {data?.user ? (
          <div className="ml-auto flex gap-x-2">
            {/* {isTeacherPage || isCoursePage ? ( */}
            <Image src="/logo.svg" alt="logo" width={50} height={50} />

            <Link href="/">
                <Button size="sm" variant="ghost">  
                <h2 className="hover:scale-105 hover:text-primary text-lg">Home</h2>
                </Button>
              </Link>
            
            {/* // ) :  ( */}
              <Link href="/search/datascience">
                <Button size="sm" variant="ghost">
                <h2 className="hover:scale-105 hover:text-primary text-lg">Services</h2>

                </Button>
              </Link>
            {/* ) } */}
          
          </div>
         ) :
<div> </div>
        }
         </div>

        </>
      )
    }