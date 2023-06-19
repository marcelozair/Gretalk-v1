import { Lora } from 'next/font/google';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FC } from 'react';

interface PostEditorProps {
  value: string;
  onChange: Function;
}

const PostEditor: FC<PostEditorProps> = ({
  value,
  onChange,
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
};

export default PostEditor;
