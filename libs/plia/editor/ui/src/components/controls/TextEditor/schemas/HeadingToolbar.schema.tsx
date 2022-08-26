import { Editor } from '@tiptap/core';

import { TextEditorToolbarItem, TextEditorToolbarKeys } from './TextEditorToolbar.scema';

export const getHeadingToolbarSchema = (editor: Editor): Array<TextEditorToolbarItem> => [
  {
    key: TextEditorToolbarKeys.HEADING1,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 1 }),
    handler: () => editor.chain().focus().setHeading({ level: 1 }).run(),
    title: 'Heading 1',
    icon: 'H1',
  },
  {
    key: TextEditorToolbarKeys.HEADING2,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 2 }),
    handler: () => editor.chain().focus().setHeading({ level: 2 }).run(),
    title: 'Heading 2',
    icon: 'H2',
  },
  {
    key: TextEditorToolbarKeys.HEADING3,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 3 }),
    handler: () => editor.chain().focus().setHeading({ level: 3 }).run(),
    title: 'Heading 3',
    icon: 'H3',
  },
  {
    key: TextEditorToolbarKeys.HEADING4,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 4 }),
    handler: () => editor.chain().focus().setHeading({ level: 4 }).run(),
    title: 'Heading 4',
    icon: 'H4',
  },
  {
    key: TextEditorToolbarKeys.HEADING5,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 5 }),
    handler: () => editor.chain().focus().setHeading({ level: 5 }).run(),
    title: 'Heading 5',
    icon: 'H5',
  },
  {
    key: TextEditorToolbarKeys.HEADING6,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 6 }),
    handler: () => editor.chain().focus().setHeading({ level: 6 }).run(),
    title: 'Heading 6',
    icon: 'H6',
  },
];
