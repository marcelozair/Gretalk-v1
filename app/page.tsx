'use client'

import { useState } from 'react'
import { Lora } from 'next/font/google'
import Section from './components/common/Section'
import Aside from './components/common/content/Aside'
import Container from './components/common/Container'
import PostResume from './components/cards/PostResume/PostResume'
import Content from './components/common/content/Content'
import DisplayContainer from './components/common/content/DisplayContainer'
import SignInModal from './components/auth/SignInModal'
import { fakePosts } from './constants/data'
import { Post } from './interfaces/post'

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
        <div className="relative w-full h-full flex items-center flex-col justify-center z-10">
          <h2 className={font.className + " text-white font-bold text-6xl text-center"}>
            Just look around you
          </h2>
          <p className="text-xl mt-4 text-white">
            Explore and deepen your knowledge about your favorite writers and topics.
          </p>

          <div className="flex mt-5">
            <button
              onClick={() => setShowSignInModal(true)}
              className="px-6 py-3 text-white bg-black rounded-md hover:shadow-md shadow-sm transition"
            >
              Start to read now
            </button>
          </div>
        </div>
      </div>
      <Container>
        <DisplayContainer>
          <Content>
            <Section>
              <div className="flex flex-col gap-10">
                { fakePosts.map((post: Post) => <PostResume key={post.id} post={post} />) }
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
