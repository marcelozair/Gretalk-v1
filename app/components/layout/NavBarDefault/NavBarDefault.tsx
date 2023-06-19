'use client'

import Logo from '../Logo';
import React, { useState } from 'react';

import './NavBarDefault.scss';
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
    href: '/new-post',
  },
]

function NavBarDefault() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

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
      <header className="header-default">
        <Container>
          <div className="flex items-center justify-between">
            <Logo isDark={true} />
            <nav className="flex items-center gap-5">
              {links.map(({ name, href }) => {
                return (
                  <a href={href} key={name} className="text-black">
                    {name}
                  </a>
                )
              })}
              <button
                onClick={() => setShowSignInModal(true)}
                className="text-black"
              >
                Sign in
              </button>
              <Button
                style="dark"
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

export default NavBarDefault;