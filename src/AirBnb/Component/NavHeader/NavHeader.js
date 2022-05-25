import { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

// import {
//   MenuIcon,
//   XIcon,
//   GlobeAltIcon,
// } from '@heroicons/react/outline';
const MenuIcon = lazy(() => import('@heroicons/react/outline/MenuIcon'));
const GlobeAltIcon = lazy(() => import('@heroicons/react/outline/GlobeAltIcon'));
const UserCircleIcon = lazy(() => import('@heroicons/react/outline/UserCircleIcon'));
const SearchIcon = lazy(() => import('@heroicons/react/outline/SearchIcon'));
const HeartIcon = lazy(() => import('@heroicons/react/outline/HeartIcon'));

// import {
//   UserIcon
// } from '@heroicons/react/solid';
const UserIcon = lazy(() => import('@heroicons/react/solid/UserIcon'));

// import { Avatar } from 'antd';
const Avatar = lazy(() => import('antd/lib/avatar/index'));


export default function NavHeader() {

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if(document.documentElement.scrollTop > 50){
      setScrolling(true);
    }else{
      setScrolling(false);
    }
  } 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Popover className={`duration-300 fixed w-full top-0 left-0 z-50 ${scrolling ? 'py-0' : 'py-2'} hidden md:block bg-white nav-header`}>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start w-0 flex-1">
            <a href="#">
              <img
                className="h-9 w-[8rem]"
                src="./assets/logo/airbnb.svg"
                alt="air bnb logo"
              />
            </a>
          </div>
          <Popover.Group as="nav" className="flex space-x-5 lg:space-x-10">

            <NavLink to='/' className={({ isActive }) => isActive ? 'relative text-base font-medium text-blue-600 hover:text-blue-800 active-link' : 'text-base font-medium text-gray-500 hover:text-black'}>
              Nơi ở
            </NavLink>
            <NavLink to='/main' className={({ isActive }) => isActive ? 'relative text-base font-medium text-blue-600 hover:text-blue-800 active-link' : 'text-base font-medium text-gray-500 hover:text-black'}>
              Trải nghiệm
            </NavLink>
            <NavLink to='/main' className={({ isActive }) => isActive ? 'relative text-base font-medium text-blue-600 hover:text-blue-800 active-link' : 'text-base font-medium text-gray-500 hover:text-black'}>
              Trải nghiệm trực tuyến
            </NavLink>
            
          </Popover.Group>
          <div className="flex items-center justify-end lg:flex-1 lg:w-0">
            <div className='rounded-full p-3 cursor-pointer hover:bg-gray-100 font-medium'>
              Đón tiếp khách
            </div>
            <div className='rounded-full p-3 hover:bg-gray-100 cursor-pointer'>
              <GlobeAltIcon className='h-5 w-5'/>
            </div>
            <div className=''>
            <Popover className='relative'>
            {({ open }) => (
              <>
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#717171] hover:text-gray-500">
              <span className={`userBtnGr h-10 w-20 flex items-center justify-around rounded-[20px] border border-gray-300 ${open ? 'shadow-user' : ''}`}><MenuIcon className="h-5 w-5"/>
              <Avatar size={28} style={{backgroundColor: '#717171'}} icon={<UserIcon/>}/>
              </span>

              <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-12 -left-[11rem] inset-x-0 p-2 transition h-[100px] w-[270px] transform origin-top-right z-50">
          <div className="rounded-lg drop-shadow-2xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="flex flex-col items-start dropdown-list-link">
              <a className='font-medium'>
                Đăng kí
              </a>
              <a className='border-b border-gray-300'>
                Đăng nhập
              </a>
              <a>
                Ngôi nha của bạn
              </a>
              <a>
                Trải nghiệm làm chủ nhà
              </a>
              <a>
                trợ giúp
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

            </Popover.Button>
              </>
            )}
            </Popover>
            </div>
          </div>
        </div>
      </div>
      
    </Popover>
    
    <Popover className={`duration-500 bottom-0 block md:hidden fixed bottom-0 left-0 w-screen h-16 bg-white border-t shadow-inner border-gray-100 nav-header z-50`}>
    <div className="w-full px-0 sm:px-4 flex justify-center bot-navbar-link">
        <NavLink to='/' className={({ isActive }) => `h-16 mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <SearchIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Explore</span>
        </NavLink>
        <NavLink to='/main' className={({ isActive }) => `h-16 mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <HeartIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Wishlists</span>
        </NavLink>
        <NavLink to='/main' className={({ isActive }) => `h-16 mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <UserCircleIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Login</span>
        </NavLink>
        
    </div>
    </Popover>
    </Suspense>
  )
}
