'use client'

import { useState } from 'react'
import { Lora } from 'next/font/google'
import Section from './components/common/content/Section'
import Aside from './components/common/content/Aside'
import Container from './components/common/content/Container'
import PostResume from './components/cards/PostResume/PostResume'
import Content from './components/common/content/Content'
import DisplayContainer from './components/common/content/DisplayContainer'
import SignInModal from './components/auth/SignInModal'
import { fakePosts } from './constants/data'
import { Post } from './interfaces/post'
import Button from './components/form/Button'
import SectionTitle from './components/common/content/SectionTitle'
import Link from 'next/link'

const font = Lora({ subsets: ['latin'] })

export default function Home() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <main>
      <SignInModal
        onClose={() => setShowSignInModal(false)}
        show={showSignInModal}
      />
      <div className="relative border-b-[1px] border-b-line w-full h-[530px] bg-hero">
        <div className="relative w-full h-full flex flex-col justify-center z-10">
          <Container>
            <h2 className={font.className + " text-white font-bold text-6xl text-left"}>
              Just look around you
            </h2>
            <p className="text-xl mt-4 text-white">
              Explore and deepen your knowledge about your favorite writers and topics.
            </p>

            <div className="flex mt-5 gap-4">
              <Button
                style="ghost"
                onClick={() => setShowSignInModal(true)}
              >
                Become a Member
              </Button>
              <Button
                onClick={() => setShowSignInModal(true)}
              >
                Start to Read Now
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <Section>
          <SectionTitle>Most viewed</SectionTitle>

          <div className="grid grid-cols-3 gap-20">
            {
              [1, 2, 3, 4, 5, 6].map((n) => (
                <article className="flex gap-2 w-[80%]" key={n}>
                  <span className={"text-4xl font-bold text-black-opacity-30 " + font.className}>{String(n).padStart(2, '0')}</span>
                  <div>
                    <Link className={"font-bold " + font.className} href="/post">How to deal with dificult co-workers</Link>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-black-opacity-50">May 08</span>
                      <div className="flex gap-1 items-center">
                        <img src="images/icons/eye-solid.svg" className="w-4 h-4" />
                        <p className={"text-black-opacity-50 " + font.className}>21K</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        </Section>
        <div className="w-full h-[1px] bg-line my-10"></div>
        <DisplayContainer>
          <Content>
            <Section>
              <div className="flex flex-col gap-10">
                {fakePosts.map((post: Post) => <PostResume key={post.id} post={post} />)}
              </div>
            </Section>
          </Content>
          <Aside>
          </Aside>
        </DisplayContainer>
      </Container>
    </main>
  )
};
