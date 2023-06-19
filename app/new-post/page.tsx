'use client';

import { Lora, Inter } from 'next/font/google';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PostContainer from '../components/common/content/PostContainer';
import { useLayoutEffect, useRef, useState } from 'react';

import './page.scss';
import NavBarDefault from '../components/layout/NavBarDefault/NavBarDefault';

const fontLora = Lora({ subsets: ['latin'] })
const fontInter = Inter({ subsets: ['latin'] })

export default function NewPost() {

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
            <CKEditor
              editor={ClassicEditor}
              data="<p>Write here ...</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
            />
          </div>
        </PostContainer>
      </main>
    </>
  )
}