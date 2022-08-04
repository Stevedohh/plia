import { JSX } from 'solid-js';
import { Editor } from '@tiptap/core';

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  OrderedList,
  StrokeIcon,
  SubscriptIcon,
  SuperscriptIcon,
  UnderlineIcon,
  UnorderedList,
} from '@plia/plia/icons';

export enum TextEditorToolbarKeys {
  HEADING1 = 'heading-1',
  HEADING2 = 'heading-2',
  HEADING3 = 'heading-3',
  SUBSCRIPT = 'subscript',
  SUPERSCRIPT = 'superscript',
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  STRIKE = 'strike',
  BULLET_LIST = 'bullet-list',
  ORDERED_LIST = 'ordered-list',
  ALIGN_LEFT = 'align_left',
  ALIGN_RIGHT = 'align_right',
  ALIGN_CENTER = 'align_center',
  ALIGN_JUSTIFY = 'align_justify',
}

type TextEditorToolbarItem = {
  key: TextEditorToolbarKeys;
  handler: () => unknown;
  isActive?: (currentEditor: Editor) => boolean;
  title: string;
  icon: JSX.Element;
};

export const getTextEditorToolbarSchema = (editor: Editor): Array<TextEditorToolbarItem> => [
  {
    key: TextEditorToolbarKeys.HEADING1,
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 1 }),
    handler: () => editor.chain().focus().setHeading({ level: 1 }).run(),
    title: 'Heading 1',
    icon: 'Heading 1',
  },
  {
    key: TextEditorToolbarKeys.HEADING2,
    handler: () => editor.chain().focus().setHeading({ level: 2 }).run(),
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 2 }),
    title: 'Heading 2',
    icon: 'Heading 2',
  },
  {
    key: TextEditorToolbarKeys.HEADING3,
    handler: () => editor.chain().focus().setHeading({ level: 3 }).run(),
    isActive: (currentEditor) => currentEditor.isActive('heading', { level: 3 }),
    title: 'Heading 3',
    icon: 'Heading 3',
  },
  {
    key: TextEditorToolbarKeys.SUBSCRIPT,
    handler: () => editor.chain().focus().toggleSubscript().run(),
    title: 'Subscript',
    icon: <SubscriptIcon />,
  },
  {
    key: TextEditorToolbarKeys.SUPERSCRIPT,
    handler: () => editor.chain().focus().toggleSuperscript().run(),
    title: 'Superscript',
    icon: <SuperscriptIcon />,
  },
  {
    key: TextEditorToolbarKeys.BOLD,
    handler: () => editor.chain().focus().toggleBold().run(),
    title: 'Bold',
    icon: <BoldIcon />,
  },
  {
    key: TextEditorToolbarKeys.ITALIC,
    handler: () => editor.chain().focus().toggleItalic().run(),
    title: 'Italic',
    icon: <ItalicIcon />,
  },
  {
    key: TextEditorToolbarKeys.UNDERLINE,
    handler: () => editor.chain().focus().toggleUnderline().run(),
    title: 'Underline',
    icon: <UnderlineIcon />,
  },
  {
    key: TextEditorToolbarKeys.STRIKE,
    handler: () => editor.chain().focus().toggleStrike().run(),
    title: 'Strike',
    icon: <StrokeIcon />,
  },
  {
    key: TextEditorToolbarKeys.BULLET_LIST,
    handler: () => editor.chain().focus().toggleBulletList().run(),
    title: 'Bullet List',
    icon: <UnorderedList />,
  },
  {
    key: TextEditorToolbarKeys.ORDERED_LIST,
    handler: () => editor.chain().focus().toggleOrderedList().run(),
    title: 'Ordered List',
    icon: <OrderedList />,
  },
  {
    key: TextEditorToolbarKeys.ALIGN_LEFT,
    handler: () => editor.chain().focus().setTextAlign('left').run(),
    title: 'Align Left',
    icon: <AlignLeftIcon />,
  },
  {
    key: TextEditorToolbarKeys.ALIGN_CENTER,
    handler: () => editor.chain().focus().setTextAlign('center').run(),
    title: 'Align Center',
    icon: <AlignCenterIcon />,
  },
  {
    key: TextEditorToolbarKeys.ALIGN_RIGHT,
    handler: () => editor.chain().focus().setTextAlign('right').run(),
    title: 'Align Right',
    icon: <AlignRightIcon />,
  },
  {
    key: TextEditorToolbarKeys.ALIGN_JUSTIFY,
    handler: () => editor.chain().focus().setTextAlign('justify').run(),
    title: 'Align Justify',
    icon: <AlignJustifyIcon />,
  },
];
