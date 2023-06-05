'use client'

import Logo from './Logo';
import React, { useEffect, useRef, useState } from 'react';

import './NavBar.css';
import SignUpModal from '../../auth/SignUpModal';
import Button from '../../form/Button';
import SignInModal from '../../auth/SignInModal';
import Container from '../../common/content/Container';

const links = [
  {
    name: 'Popular',
    href: '/',
  },
  {
    name: 'Write',
    href: '/',
  },
]

function NavBar() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const scrollEvent = () => {
    const isActive = headerRef?.current?.classList.contains('active-header');
    if (window.scrollY > 100 && !isActive) {
      headerRef?.current?.classList.add('active-header');
      setStickyHeader(true);
    } else if (window.scrollY < 100 && isActive) {
      headerRef?.current?.classList.remove('active-header');
      setStickyHeader(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    return () => document.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <div>
      <SignUpModal
        onClose={() => setShowSignUpModal(false)}
        show={showSignUpModal}
      />

      <SignInModal
        onClose={() => setShowSignInModal(false)}
        show={showSignInModal}
      />
      <header ref={headerRef} className="header">
        <Container>
          <div className="flex items-center justify-between">
            <Logo isDark={stickyHeader} />
            <nav className="flex items-center gap-5">
              {links.map(({ name, href }) => {
                return (
                  <a href={href} key={name} className={stickyHeader ? 'text-black' : 'text-white'}>
                    {name}
                  </a>
                )
              })}
              <button
                onClick={() => setShowSignInModal(true)}
                className={stickyHeader ? 'text-black' : 'text-white'}
              >
                Sign in
              </button>
              <Button
                style={stickyHeader ? 'dark' : 'normal'}
                onClick={() => setShowSignUpModal(true)}
              >
                Get started
              </Button>
            </nav>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default NavBar;