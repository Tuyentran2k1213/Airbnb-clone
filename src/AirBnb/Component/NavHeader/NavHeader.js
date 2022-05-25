import { Fragment, Suspense, lazy } from 'react'
import { Popover, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

// import {
//   MenuIcon,
//   XIcon,
//   GlobeAltIcon,
// } from '@heroicons/react/outline';
const MenuIcon = lazy(() => import('@heroicons/react/outline/MenuIcon'));
const XIcon = lazy(() => import('@heroicons/react/outline/XIcon'));
const GlobeAltIcon = lazy(() => import('@heroicons/react/outline/GlobeAltIcon'));

// import {
//   UserIcon
// } from '@heroicons/react/solid';
const UserIcon = lazy(() => import('@heroicons/react/solid/UserIcon'));

// import { Avatar } from 'antd';
const Avatar = lazy(() => import('antd/lib/avatar/index'));


export default function NavHeader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="./assets/logo/airbnb.svg"
                alt="air bnb logo"
              />
            </a>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <NavLink to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">
              Nơi ở
            </NavLink>
            <NavLink to='/main' className="text-base font-medium text-gray-500 hover:text-gray-900">
              Trải nghiệm
            </NavLink>
            <NavLink to='/main' className="text-base font-medium text-gray-500 hover:text-gray-900">
              Trải nghiệm trực tuyến
            </NavLink>
            
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div>
              Đón tiếp khách
            </div>
            <div>
              <GlobeAltIcon className='h-[50px] w-[50px]'/>
            </div>
            <div className='flex flex-row-reverse justify-center items-center'>

              <Avatar size='small' icon={<UserIcon/>}/>

            <Popover className='relative'>
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span><MenuIcon className="h-6 w-6"/></span>

              <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-[1.5rem] -left-[30rem] inset-x-0 p-2 transition h-[100px] w-[500px] transform origin-top-right">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="flex flex-col">
              <a>
                Đăng kí
              </a>
              <a>
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
            </Popover>
            </div>
          </div>
        </div>
      </div>

      
    </Popover>
    </Suspense>
  )
}
