import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
// import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Início', href: '/', current: false },
    { name: 'Administrativo', href: '/admin', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div className="p-4 bg-[#03050d] top-0 w-full border-b border-b-lightblue/30 flex justify-between sm:h-20 items-center">

                <div className="flex items-center">
                    <span className="block text-2xl text-white h-10 w-20px lg:hidden">
                        Chat
                    </span>
                    <span className="hidden text-4xl text-white h-48px w-48px lg:block">
                        Chat
                    </span>
                </div>
                
                <div className="hidden md:block mx-auto justify-end space-x-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                'px-3 py-4 rounded-md text-lg font-normal'
                            )}
                            aria-current={item.href ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className='block lg:hidden'>
                    <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                </div>

                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Drawerdata />
                </Drawer>

            </div>
        </>
    );
};

export default Navbar;
