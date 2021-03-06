import { Fragment, Suspense, lazy, useEffect, useState } from 'react';
import { AirBnbIcon } from '../../assets/SpecialIcon';
import { Popover, Transition } from '@headlessui/react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../store';
// import { SignupForm } from '../FormModal/FormModal';
const SignupForm = lazy(() => import('../FormModal/SignupForm'));
const LoginForm = lazy(() => import('../FormModal/LoginForm'));

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
const AnnotationIcon = lazy(() => import('@heroicons/react/outline/AnnotationIcon'));
const GlobeIcon = lazy(() => import('@heroicons/react/outline/GlobeIcon'));
const Image = lazy(() => import('antd/lib/image/index'));

// import {
//   UserIcon
// } from '@heroicons/react/solid';
const UserIcon = lazy(() => import('@heroicons/react/solid/UserIcon'));

// import { Avatar } from 'antd';
const Avatar = lazy(() => import('antd/lib/avatar/index'));

const Spin = lazy(() => import('antd/lib/spin/index'));


export default function NavHeader() {

  const { userInfor } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [scrolling, setScrolling] = useState(false);
  const [signupForm, setSignupForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [loadingSignin, setLoadingSignin] = useState(false);
  


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

  const handleLogout = () => {
    setLoadingSignin(true);
    setTimeout(() => {
      dispatch(userAction.LogoutAction());
      setLoadingSignin(false);
    }, 1000)
  }
  let navigate = useNavigate()
  const handleToUserPage = () =>{
    navigate('/user')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Popover className={`duration-300 fixed w-full top-0 left-0 z-50 ${scrolling ? 'py-0' : 'py-2'} hidden md:block bg-white nav-header`}>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start w-0 flex-1">
            <a href="/">
              <div className="h-9 w-[8rem]">
              <AirBnbIcon/>
              </div>
            </a>
          </div>
          <Popover.Group as="nav" className="flex space-x-5 lg:space-x-10">

            <NavLink to='/' className={({ isActive }) => isActive ? 'relative text-base font-medium text-blue-600 hover:text-blue-800 active-link' : 'text-base font-medium text-gray-500 hover:text-black'}>
              N??i ???
            </NavLink>
            <NavLink to='/main' className={({ isActive }) => isActive ? 'relative text-base font-medium text-blue-600 hover:text-blue-800 active-link' : 'text-base font-medium text-gray-500 hover:text-black'}>
              Tr???i nghi???m
            </NavLink>
            <NavLink to='/main' className={({ isActive }) => isActive ? 'relative text-base font-medium text-blue-600 hover:text-blue-800 active-link' : 'text-base font-medium text-gray-500 hover:text-black'}>
              Tr???i nghi???m tr???c tuy???n
            </NavLink>
            
          </Popover.Group>
          <div className="flex items-center justify-end lg:flex-1 lg:w-0">
            <div className='rounded-full p-3 cursor-pointer hover:bg-gray-100 font-medium'>
              ????n ti???p kh??ch
            </div>
            <div className='rounded-full p-3 hover:bg-gray-100 cursor-pointer'>
              <GlobeAltIcon className='h-5 w-5'/>
            </div>
            <div className=''>
            <Popover className='relative'>
            {({ open }) => (
              <>
              {userInfor ? (
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#717171] hover:text-gray-500">
                <span className={`userBtnGr h-10 w-20 flex items-center justify-around rounded-[20px] border border-gray-300 ${open ? 'shadow-user' : ''}`}><MenuIcon className="h-5 w-5"/>
                {userInfor.avatar ? (
                  <Avatar src={
                    <Image
                    src={userInfor.avatar}
                    style={{
                      width: 28,
                    }}
                    />
                  }/>
                ) : (
                  <Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      {userInfor?.name.slice(0, 1).toUpperCase()}
    </Avatar>
                )}
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
            <Spin tip="Logout..." spinning={loadingSignin}>
            <div className="rounded-lg drop-shadow-2xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="flex flex-col items-start dropdown-list-link">
                <a className='font-medium'>
                  Tin nh???n
                </a>
                <a className='font-medium'>
                  Th??ng b??o
                </a>
                <a className='font-medium'>
                  Chuy???n ??i
                </a>
                <a className='font-medium border-b border-gray-300'>
                  Danh s??ch y??u th??ch
                </a>
                <a>
                  Cho thu?? nh??
                </a>
                <a>
                  T??? ch???c tr???i nghi???m
                </a>
                <a className='border-b border-gray-300' onClick={handleToUserPage}>
                  T??i kho???n
                </a>
                <a>
                  Tr??? gi??p
                </a>
                <a onClick={handleLogout}>
                  ????ng xu???t
                </a>
              </div>
            </div>
            </Spin>
          </Popover.Panel>
        </Transition>
  
              </Popover.Button>
              ) : (
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
              <a className='font-medium' onClick={() => setSignupForm(true)}>
                ????ng k??
              </a>
              <a className='border-b border-gray-300' onClick={() => setLoginForm(true)}>
                ????ng nh???p
              </a>
              <a>
                Ng??i nha c???a b???n
              </a>
              <a>
                Tr???i nghi???m l??m ch??? nh??
              </a>
              <a>
                tr??? gi??p
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

            </Popover.Button>
              )}
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
        {userInfor ? (
          <>
          <NavLink to='/' className={({ isActive }) => `h-16 mx-[22px] sm:mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <SearchIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Kh??m ph??</span>
        </NavLink>
        <NavLink to='/main' className={({ isActive }) => `h-16 mx-[22px] sm:mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <HeartIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Y??u th??ch</span>
        </NavLink>
        <NavLink to='/mobile/login' className={({ isActive }) => `h-16 mx-[22px] sm:mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <GlobeIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Chuy???n ??i</span>
        </NavLink>
        <NavLink to='/mobile/login' className={({ isActive }) => `h-16 mx-[22px] sm:mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <AnnotationIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>H???p th??</span>
        </NavLink>
        <NavLink to='/user' className={({ isActive }) => `h-16 mx-[22px] sm:mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <UserCircleIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>H??? s??</span>
        </NavLink>
          </>
        ) : (
          <>
          <NavLink to='/' className={({ isActive }) => `h-16 mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <SearchIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Explore</span>
        </NavLink>
        <NavLink to='/main' className={({ isActive }) => `h-16 mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <HeartIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Wishlists</span>
        </NavLink>
        <NavLink to='/mobile/login' className={({ isActive }) => `h-16 mx-[40px] flex flex-col justify-center items-center ${isActive ? 'navbar-bot-item-active' : ''}`}>
            <UserCircleIcon className='h-8 w-8 text-gray-400 navbar-bot-icon'/>
            <span className='text-[11px] font-medium text-gray-500'>Login</span>
        </NavLink>
          </>
        )}
        
    </div>
    </Popover>

    <SignupForm openForm={signupForm} clickClose={() => setSignupForm(false)}/>
    <LoginForm openForm={loginForm} clickClose={() => setLoginForm(false)}/>

    </Suspense>
  )
}
