'use client';

import './page.scss';
import dynamic from "next/dynamic";
import { Lora, Inter } from 'next/font/google';
import { useLayoutEffect, useRef } from 'react';
import PostContainer from '../components/common/content/PostContainer';
import NavBarDefault from '../components/layout/NavBarDefault/NavBarDefault';


const fontLora = Lora({ subsets: ['latin'] })
const fontInter = Inter({ subsets: ['latin'] })

export default function NewPost() {
  const Editor = dynamic(() => import("../components/post/PostEditor/PostEditor"), { ssr: false });

  const titleInputRef = useRef<HTMLTextAreaElement>(null);

  const titleAutoRows = (e: KeyboardEvent) => {
    let textareaElement = titleInputRef.current as HTMLTextAreaElement;

    setTimeout(function () {
      textareaElement.style.cssText = 'height:auto; padding:0';
      textareaElement.style.cssText = 'height:' + textareaElement.scrollHeight + 'px';
    }, 0);
  }

  useLayoutEffect(() => {
    titleInputRef.current?.addEventListener('keydown', titleAutoRows)
  }, []);

  return (
    <>
      <NavBarDefault />
      <main className="mt-10">
        <PostContainer>
          <textarea
            ref={titleInputRef}
            placeholder="Tell us your Story ..."
            rows={1}
            className={
              fontInter.className +
              " input-title"
            }
          >
          </textarea>
          <div className={fontLora.className}>
            <Editor value="" onChange={() => console.log('onchage')} />
          </div>
        </PostContainer>
      </main>
    </>
  )
}